import React, { useContext, useEffect, useMemo } from 'react'
import { withEmotionCache } from '@emotion/react'
import {
  Box,
  ChakraProvider,
  HStack,
  VStack,
  extendTheme,
  cookieStorageManagerSSR,
} from '@chakra-ui/react'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'

import { ServerStyleContext, ClientStyleContext } from './context'
import { LoaderArgs } from '@remix-run/node'

const theme = extendTheme({})

interface DocumentProps {
  children: React.ReactNode
}

function Layout({ children }: DocumentProps) {
  return (
    <VStack w="full" h="100vh">
      <HStack>
        <Link to="/">Home</Link>
        <Link to="/snap">Snap</Link>
      </HStack>
      <Box flexGrow="1" w="100%">
        {children}
      </Box>
    </VStack>
  )
}

const DEFAULT_COLOR_MODE: 'dark' | 'light' | null = 'dark'

const CHAKRA_COOKIE_COLOR_KEY = 'chakra-ui-color-mode'

function getColorMode(cookies: string) {
  const match = cookies.match(new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`))
  return match == null ? void 0 : match[2]
}

const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext)
  const clientStyleData = useContext(ClientStyleContext)

  // here we can set the default color mode. If we set it to null,
  // there's no way for us to know what is the the user's preferred theme
  // so the cient will have to figure out and maybe there'll be a flash the first time the user visits us.

  let cookies = useLoaderData()

  // the client get the cookies from the document
  // because when we do a client routing, the loader can have stored an outdated value
  if (typeof document !== 'undefined') {
    cookies = document.cookie
  }

  // get and store the color mode from the cookies.
  // It'll update the cookies if there isn't any and we have set a default value
  let colorMode = useMemo(() => {
    let color = getColorMode(cookies)

    if (!color && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`
      color = DEFAULT_COLOR_MODE
    }

    return color
  }, [cookies])

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head
    // re-inject tags
    const tags = emotionCache.sheet.tags
    emotionCache.sheet.flush()
    tags.forEach((tag) => {
      ;(emotionCache.sheet as any)._insertTag(tag)
    })
    // reset cache to reapply global styles
    clientStyleData?.reset()
  }, [])

  return (
    <html
      lang="en"
      {...(colorMode && {
        'data-theme': colorMode,
        style: { colorScheme: colorMode },
      })}
    >
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body
        {...(colorMode && {
          className: `chakra-ui-${colorMode}`,
        })}
      >
        <ChakraProvider theme={theme} colorModeManager={cookieStorageManagerSSR(cookies)}>
          <Layout>{children}</Layout>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
})

export async function loader({ request }: LoaderArgs) {
  // first time users will not have any cookies and you may not return
  // undefined here, hence ?? is necessary
  return request.headers.get('cookie') ?? ''
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}
