/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

import { MetaMaskInpageProvider } from '@metamask/providers';
/*
 * Window type extension to support ethereum
 */

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
