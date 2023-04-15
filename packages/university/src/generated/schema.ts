// @ts-nocheck
export type Scalars = {
  BigDecimal: any
  BigInt: any
  Boolean: boolean
  Bytes: any
  Float: number
  ID: string
  Int: number
  String: string
}

export interface Bundle {
  id: Scalars['ID']
  ethPriceUSD: Scalars['BigDecimal']
  __typename: 'Bundle'
}

export type Bundle_orderBy = 'id' | 'ethPriceUSD'

export interface Burn {
  id: Scalars['ID']
  transaction: Transaction
  pool: Pool
  token0: Token
  token1: Token
  timestamp: Scalars['BigInt']
  owner?: Scalars['Bytes']
  origin: Scalars['Bytes']
  amount: Scalars['BigInt']
  amount0: Scalars['BigDecimal']
  amount1: Scalars['BigDecimal']
  amountUSD?: Scalars['BigDecimal']
  tickLower: Scalars['BigInt']
  tickUpper: Scalars['BigInt']
  logIndex?: Scalars['BigInt']
  __typename: 'Burn'
}

export type Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'timestamp'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex'

export interface Collect {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pool: Pool
  owner?: Scalars['Bytes']
  amount0: Scalars['BigDecimal']
  amount1: Scalars['BigDecimal']
  amountUSD?: Scalars['BigDecimal']
  tickLower: Scalars['BigInt']
  tickUpper: Scalars['BigInt']
  logIndex?: Scalars['BigInt']
  __typename: 'Collect'
}

export type Collect_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'owner'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex'

export interface Factory {
  id: Scalars['ID']
  poolCount: Scalars['BigInt']
  txCount: Scalars['BigInt']
  totalVolumeUSD: Scalars['BigDecimal']
  totalVolumeETH: Scalars['BigDecimal']
  totalFeesUSD: Scalars['BigDecimal']
  totalFeesETH: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  totalValueLockedUSD: Scalars['BigDecimal']
  totalValueLockedETH: Scalars['BigDecimal']
  totalValueLockedUSDUntracked: Scalars['BigDecimal']
  totalValueLockedETHUntracked: Scalars['BigDecimal']
  owner: Scalars['ID']
  __typename: 'Factory'
}

export type Factory_orderBy =
  | 'id'
  | 'poolCount'
  | 'txCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'totalFeesUSD'
  | 'totalFeesETH'
  | 'untrackedVolumeUSD'
  | 'totalValueLockedUSD'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSDUntracked'
  | 'totalValueLockedETHUntracked'
  | 'owner'

export interface Flash {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pool: Pool
  sender: Scalars['Bytes']
  recipient: Scalars['Bytes']
  amount0: Scalars['BigDecimal']
  amount1: Scalars['BigDecimal']
  amountUSD: Scalars['BigDecimal']
  amount0Paid: Scalars['BigDecimal']
  amount1Paid: Scalars['BigDecimal']
  logIndex?: Scalars['BigInt']
  __typename: 'Flash'
}

export type Flash_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'amount0Paid'
  | 'amount1Paid'
  | 'logIndex'

export interface Mint {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pool: Pool
  token0: Token
  token1: Token
  owner: Scalars['Bytes']
  sender?: Scalars['Bytes']
  origin: Scalars['Bytes']
  amount: Scalars['BigInt']
  amount0: Scalars['BigDecimal']
  amount1: Scalars['BigDecimal']
  amountUSD?: Scalars['BigDecimal']
  tickLower: Scalars['BigInt']
  tickUpper: Scalars['BigInt']
  logIndex?: Scalars['BigInt']
  __typename: 'Mint'
}

export type Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'owner'
  | 'sender'
  | 'origin'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex'

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export interface Pool {
  id: Scalars['ID']
  createdAtTimestamp: Scalars['BigInt']
  createdAtBlockNumber: Scalars['BigInt']
  token0: Token
  token1: Token
  feeTier: Scalars['BigInt']
  liquidity: Scalars['BigInt']
  sqrtPrice: Scalars['BigInt']
  feeGrowthGlobal0X128: Scalars['BigInt']
  feeGrowthGlobal1X128: Scalars['BigInt']
  token0Price: Scalars['BigDecimal']
  token1Price: Scalars['BigDecimal']
  tick?: Scalars['BigInt']
  observationIndex: Scalars['BigInt']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  collectedFeesToken0: Scalars['BigDecimal']
  collectedFeesToken1: Scalars['BigDecimal']
  collectedFeesUSD: Scalars['BigDecimal']
  totalValueLockedToken0: Scalars['BigDecimal']
  totalValueLockedToken1: Scalars['BigDecimal']
  totalValueLockedETH: Scalars['BigDecimal']
  totalValueLockedUSD: Scalars['BigDecimal']
  totalValueLockedUSDUntracked: Scalars['BigDecimal']
  liquidityProviderCount: Scalars['BigInt']
  poolHourData: PoolHourData[]
  poolDayData: PoolDayData[]
  mints: Mint[]
  burns: Burn[]
  swaps: Swap[]
  collects: Collect[]
  ticks: Tick[]
  __typename: 'Pool'
}

export interface PoolDayData {
  id: Scalars['ID']
  date: Scalars['Int']
  pool: Pool
  liquidity: Scalars['BigInt']
  sqrtPrice: Scalars['BigInt']
  token0Price: Scalars['BigDecimal']
  token1Price: Scalars['BigDecimal']
  tick?: Scalars['BigInt']
  feeGrowthGlobal0X128: Scalars['BigInt']
  feeGrowthGlobal1X128: Scalars['BigInt']
  tvlUSD: Scalars['BigDecimal']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  open: Scalars['BigDecimal']
  high: Scalars['BigDecimal']
  low: Scalars['BigDecimal']
  close: Scalars['BigDecimal']
  __typename: 'PoolDayData'
}

export type PoolDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close'

export interface PoolHourData {
  id: Scalars['ID']
  periodStartUnix: Scalars['Int']
  pool: Pool
  liquidity: Scalars['BigInt']
  sqrtPrice: Scalars['BigInt']
  token0Price: Scalars['BigDecimal']
  token1Price: Scalars['BigDecimal']
  tick?: Scalars['BigInt']
  feeGrowthGlobal0X128: Scalars['BigInt']
  feeGrowthGlobal1X128: Scalars['BigInt']
  tvlUSD: Scalars['BigDecimal']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  open: Scalars['BigDecimal']
  high: Scalars['BigDecimal']
  low: Scalars['BigDecimal']
  close: Scalars['BigDecimal']
  __typename: 'PoolHourData'
}

export type PoolHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close'

export type Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'feeTier'
  | 'liquidity'
  | 'sqrtPrice'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'observationIndex'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'totalValueLockedToken0'
  | 'totalValueLockedToken1'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'liquidityProviderCount'
  | 'poolHourData'
  | 'poolDayData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'collects'
  | 'ticks'

export interface Position {
  id: Scalars['ID']
  owner: Scalars['Bytes']
  pool: Pool
  token0: Token
  token1: Token
  tickLower: Tick
  tickUpper: Tick
  liquidity: Scalars['BigInt']
  depositedToken0: Scalars['BigDecimal']
  depositedToken1: Scalars['BigDecimal']
  withdrawnToken0: Scalars['BigDecimal']
  withdrawnToken1: Scalars['BigDecimal']
  collectedFeesToken0: Scalars['BigDecimal']
  collectedFeesToken1: Scalars['BigDecimal']
  transaction: Transaction
  feeGrowthInside0LastX128: Scalars['BigInt']
  feeGrowthInside1LastX128: Scalars['BigInt']
  __typename: 'Position'
}

export interface PositionSnapshot {
  id: Scalars['ID']
  owner: Scalars['Bytes']
  pool: Pool
  position: Position
  blockNumber: Scalars['BigInt']
  timestamp: Scalars['BigInt']
  liquidity: Scalars['BigInt']
  depositedToken0: Scalars['BigDecimal']
  depositedToken1: Scalars['BigDecimal']
  withdrawnToken0: Scalars['BigDecimal']
  withdrawnToken1: Scalars['BigDecimal']
  collectedFeesToken0: Scalars['BigDecimal']
  collectedFeesToken1: Scalars['BigDecimal']
  transaction: Transaction
  feeGrowthInside0LastX128: Scalars['BigInt']
  feeGrowthInside1LastX128: Scalars['BigInt']
  __typename: 'PositionSnapshot'
}

export type PositionSnapshot_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'position'
  | 'position__id'
  | 'position__owner'
  | 'position__liquidity'
  | 'position__depositedToken0'
  | 'position__depositedToken1'
  | 'position__withdrawnToken0'
  | 'position__withdrawnToken1'
  | 'position__collectedFeesToken0'
  | 'position__collectedFeesToken1'
  | 'position__feeGrowthInside0LastX128'
  | 'position__feeGrowthInside1LastX128'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128'

export type Position_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'tickLower'
  | 'tickLower__id'
  | 'tickLower__poolAddress'
  | 'tickLower__tickIdx'
  | 'tickLower__liquidityGross'
  | 'tickLower__liquidityNet'
  | 'tickLower__price0'
  | 'tickLower__price1'
  | 'tickLower__volumeToken0'
  | 'tickLower__volumeToken1'
  | 'tickLower__volumeUSD'
  | 'tickLower__untrackedVolumeUSD'
  | 'tickLower__feesUSD'
  | 'tickLower__collectedFeesToken0'
  | 'tickLower__collectedFeesToken1'
  | 'tickLower__collectedFeesUSD'
  | 'tickLower__createdAtTimestamp'
  | 'tickLower__createdAtBlockNumber'
  | 'tickLower__liquidityProviderCount'
  | 'tickLower__feeGrowthOutside0X128'
  | 'tickLower__feeGrowthOutside1X128'
  | 'tickUpper'
  | 'tickUpper__id'
  | 'tickUpper__poolAddress'
  | 'tickUpper__tickIdx'
  | 'tickUpper__liquidityGross'
  | 'tickUpper__liquidityNet'
  | 'tickUpper__price0'
  | 'tickUpper__price1'
  | 'tickUpper__volumeToken0'
  | 'tickUpper__volumeToken1'
  | 'tickUpper__volumeUSD'
  | 'tickUpper__untrackedVolumeUSD'
  | 'tickUpper__feesUSD'
  | 'tickUpper__collectedFeesToken0'
  | 'tickUpper__collectedFeesToken1'
  | 'tickUpper__collectedFeesUSD'
  | 'tickUpper__createdAtTimestamp'
  | 'tickUpper__createdAtBlockNumber'
  | 'tickUpper__liquidityProviderCount'
  | 'tickUpper__feeGrowthOutside0X128'
  | 'tickUpper__feeGrowthOutside1X128'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128'

export interface Query {
  factory?: Factory
  factories: Factory[]
  bundle?: Bundle
  bundles: Bundle[]
  token?: Token
  tokens: Token[]
  pool?: Pool
  pools: Pool[]
  tick?: Tick
  ticks: Tick[]
  position?: Position
  positions: Position[]
  positionSnapshot?: PositionSnapshot
  positionSnapshots: PositionSnapshot[]
  transaction?: Transaction
  transactions: Transaction[]
  mint?: Mint
  mints: Mint[]
  burn?: Burn
  burns: Burn[]
  swap?: Swap
  swaps: Swap[]
  collect?: Collect
  collects: Collect[]
  flash?: Flash
  flashes: Flash[]
  uniswapDayData?: UniswapDayData
  uniswapDayDatas: UniswapDayData[]
  poolDayData?: PoolDayData
  poolDayDatas: PoolDayData[]
  poolHourData?: PoolHourData
  poolHourDatas: PoolHourData[]
  tickHourData?: TickHourData
  tickHourDatas: TickHourData[]
  tickDayData?: TickDayData
  tickDayDatas: TickDayData[]
  tokenDayData?: TokenDayData
  tokenDayDatas: TokenDayData[]
  tokenHourData?: TokenHourData
  tokenHourDatas: TokenHourData[]
  /** Access to subgraph metadata */
  _meta?: _Meta_
  __typename: 'Query'
}

export interface Subscription {
  factory?: Factory
  factories: Factory[]
  bundle?: Bundle
  bundles: Bundle[]
  token?: Token
  tokens: Token[]
  pool?: Pool
  pools: Pool[]
  tick?: Tick
  ticks: Tick[]
  position?: Position
  positions: Position[]
  positionSnapshot?: PositionSnapshot
  positionSnapshots: PositionSnapshot[]
  transaction?: Transaction
  transactions: Transaction[]
  mint?: Mint
  mints: Mint[]
  burn?: Burn
  burns: Burn[]
  swap?: Swap
  swaps: Swap[]
  collect?: Collect
  collects: Collect[]
  flash?: Flash
  flashes: Flash[]
  uniswapDayData?: UniswapDayData
  uniswapDayDatas: UniswapDayData[]
  poolDayData?: PoolDayData
  poolDayDatas: PoolDayData[]
  poolHourData?: PoolHourData
  poolHourDatas: PoolHourData[]
  tickHourData?: TickHourData
  tickHourDatas: TickHourData[]
  tickDayData?: TickDayData
  tickDayDatas: TickDayData[]
  tokenDayData?: TokenDayData
  tokenDayDatas: TokenDayData[]
  tokenHourData?: TokenHourData
  tokenHourDatas: TokenHourData[]
  /** Access to subgraph metadata */
  _meta?: _Meta_
  __typename: 'Subscription'
}

export interface Swap {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pool: Pool
  token0: Token
  token1: Token
  sender: Scalars['Bytes']
  recipient: Scalars['Bytes']
  origin: Scalars['Bytes']
  amount0: Scalars['BigDecimal']
  amount1: Scalars['BigDecimal']
  amountUSD: Scalars['BigDecimal']
  sqrtPriceX96: Scalars['BigInt']
  tick: Scalars['BigInt']
  logIndex?: Scalars['BigInt']
  __typename: 'Swap'
}

export type Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'sender'
  | 'recipient'
  | 'origin'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'sqrtPriceX96'
  | 'tick'
  | 'logIndex'

export interface Tick {
  id: Scalars['ID']
  poolAddress?: Scalars['String']
  tickIdx: Scalars['BigInt']
  pool: Pool
  liquidityGross: Scalars['BigInt']
  liquidityNet: Scalars['BigInt']
  price0: Scalars['BigDecimal']
  price1: Scalars['BigDecimal']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  collectedFeesToken0: Scalars['BigDecimal']
  collectedFeesToken1: Scalars['BigDecimal']
  collectedFeesUSD: Scalars['BigDecimal']
  createdAtTimestamp: Scalars['BigInt']
  createdAtBlockNumber: Scalars['BigInt']
  liquidityProviderCount: Scalars['BigInt']
  feeGrowthOutside0X128: Scalars['BigInt']
  feeGrowthOutside1X128: Scalars['BigInt']
  __typename: 'Tick'
}

export interface TickDayData {
  id: Scalars['ID']
  date: Scalars['Int']
  pool: Pool
  tick: Tick
  liquidityGross: Scalars['BigInt']
  liquidityNet: Scalars['BigInt']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  feeGrowthOutside0X128: Scalars['BigInt']
  feeGrowthOutside1X128: Scalars['BigInt']
  __typename: 'TickDayData'
}

export type TickDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128'

export interface TickHourData {
  id: Scalars['ID']
  periodStartUnix: Scalars['Int']
  pool: Pool
  tick: Tick
  liquidityGross: Scalars['BigInt']
  liquidityNet: Scalars['BigInt']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  __typename: 'TickHourData'
}

export type TickHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'

export type Tick_orderBy =
  | 'id'
  | 'poolAddress'
  | 'tickIdx'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'price0'
  | 'price1'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128'

export interface Token {
  id: Scalars['ID']
  symbol: Scalars['String']
  name: Scalars['String']
  decimals: Scalars['BigInt']
  totalSupply: Scalars['BigInt']
  volume: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  poolCount: Scalars['BigInt']
  totalValueLocked: Scalars['BigDecimal']
  totalValueLockedUSD: Scalars['BigDecimal']
  totalValueLockedUSDUntracked: Scalars['BigDecimal']
  derivedETH: Scalars['BigDecimal']
  whitelistPools: Pool[]
  tokenDayData: TokenDayData[]
  __typename: 'Token'
}

export interface TokenDayData {
  id: Scalars['ID']
  date: Scalars['Int']
  token: Token
  volume: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  totalValueLocked: Scalars['BigDecimal']
  totalValueLockedUSD: Scalars['BigDecimal']
  priceUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  open: Scalars['BigDecimal']
  high: Scalars['BigDecimal']
  low: Scalars['BigDecimal']
  close: Scalars['BigDecimal']
  __typename: 'TokenDayData'
}

export type TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close'

export interface TokenHourData {
  id: Scalars['ID']
  periodStartUnix: Scalars['Int']
  token: Token
  volume: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  totalValueLocked: Scalars['BigDecimal']
  totalValueLockedUSD: Scalars['BigDecimal']
  priceUSD: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  open: Scalars['BigDecimal']
  high: Scalars['BigDecimal']
  low: Scalars['BigDecimal']
  close: Scalars['BigDecimal']
  __typename: 'TokenHourData'
}

export type TokenHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close'

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'poolCount'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'derivedETH'
  | 'whitelistPools'
  | 'tokenDayData'

export interface Transaction {
  id: Scalars['ID']
  blockNumber: Scalars['BigInt']
  timestamp: Scalars['BigInt']
  gasUsed: Scalars['BigInt']
  gasPrice: Scalars['BigInt']
  mints: (Mint | undefined)[]
  burns: (Burn | undefined)[]
  swaps: (Swap | undefined)[]
  flashed: (Flash | undefined)[]
  collects: (Collect | undefined)[]
  __typename: 'Transaction'
}

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'gasUsed'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'flashed'
  | 'collects'

export interface UniswapDayData {
  id: Scalars['ID']
  date: Scalars['Int']
  volumeETH: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  volumeUSDUntracked: Scalars['BigDecimal']
  feesUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  tvlUSD: Scalars['BigDecimal']
  __typename: 'UniswapDayData'
}

export type UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'volumeETH'
  | 'volumeUSD'
  | 'volumeUSDUntracked'
  | 'feesUSD'
  | 'txCount'
  | 'tvlUSD'

export interface _Block_ {
  /** The hash of the block */
  hash?: Scalars['Bytes']
  /** The block number */
  number: Scalars['Int']
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Scalars['Int']
  __typename: '_Block_'
}

/** The type for the top-level _meta field */
export interface _Meta_ {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']
  __typename: '_Meta_'
}

export type _SubgraphErrorPolicy_ = 'allow' | 'deny'

export interface BlockChangedFilter {
  number_gte: Scalars['Int']
}

export interface Block_height {
  hash?: Scalars['Bytes'] | null
  number?: Scalars['Int'] | null
  number_gte?: Scalars['Int'] | null
}

export interface BundleGenqlSelection {
  id?: boolean | number
  ethPriceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Bundle_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  ethPriceUSD?: Scalars['BigDecimal'] | null
  ethPriceUSD_not?: Scalars['BigDecimal'] | null
  ethPriceUSD_gt?: Scalars['BigDecimal'] | null
  ethPriceUSD_lt?: Scalars['BigDecimal'] | null
  ethPriceUSD_gte?: Scalars['BigDecimal'] | null
  ethPriceUSD_lte?: Scalars['BigDecimal'] | null
  ethPriceUSD_in?: Scalars['BigDecimal'][] | null
  ethPriceUSD_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Bundle_filter | null)[] | null
  or?: (Bundle_filter | null)[] | null
}

export interface BurnGenqlSelection {
  id?: boolean | number
  transaction?: TransactionGenqlSelection
  pool?: PoolGenqlSelection
  token0?: TokenGenqlSelection
  token1?: TokenGenqlSelection
  timestamp?: boolean | number
  owner?: boolean | number
  origin?: boolean | number
  amount?: boolean | number
  amount0?: boolean | number
  amount1?: boolean | number
  amountUSD?: boolean | number
  tickLower?: boolean | number
  tickUpper?: boolean | number
  logIndex?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Burn_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  token0?: Scalars['String'] | null
  token0_not?: Scalars['String'] | null
  token0_gt?: Scalars['String'] | null
  token0_lt?: Scalars['String'] | null
  token0_gte?: Scalars['String'] | null
  token0_lte?: Scalars['String'] | null
  token0_in?: Scalars['String'][] | null
  token0_not_in?: Scalars['String'][] | null
  token0_contains?: Scalars['String'] | null
  token0_contains_nocase?: Scalars['String'] | null
  token0_not_contains?: Scalars['String'] | null
  token0_not_contains_nocase?: Scalars['String'] | null
  token0_starts_with?: Scalars['String'] | null
  token0_starts_with_nocase?: Scalars['String'] | null
  token0_not_starts_with?: Scalars['String'] | null
  token0_not_starts_with_nocase?: Scalars['String'] | null
  token0_ends_with?: Scalars['String'] | null
  token0_ends_with_nocase?: Scalars['String'] | null
  token0_not_ends_with?: Scalars['String'] | null
  token0_not_ends_with_nocase?: Scalars['String'] | null
  token0_?: Token_filter | null
  token1?: Scalars['String'] | null
  token1_not?: Scalars['String'] | null
  token1_gt?: Scalars['String'] | null
  token1_lt?: Scalars['String'] | null
  token1_gte?: Scalars['String'] | null
  token1_lte?: Scalars['String'] | null
  token1_in?: Scalars['String'][] | null
  token1_not_in?: Scalars['String'][] | null
  token1_contains?: Scalars['String'] | null
  token1_contains_nocase?: Scalars['String'] | null
  token1_not_contains?: Scalars['String'] | null
  token1_not_contains_nocase?: Scalars['String'] | null
  token1_starts_with?: Scalars['String'] | null
  token1_starts_with_nocase?: Scalars['String'] | null
  token1_not_starts_with?: Scalars['String'] | null
  token1_not_starts_with_nocase?: Scalars['String'] | null
  token1_ends_with?: Scalars['String'] | null
  token1_ends_with_nocase?: Scalars['String'] | null
  token1_not_ends_with?: Scalars['String'] | null
  token1_not_ends_with_nocase?: Scalars['String'] | null
  token1_?: Token_filter | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  owner?: Scalars['Bytes'] | null
  owner_not?: Scalars['Bytes'] | null
  owner_gt?: Scalars['Bytes'] | null
  owner_lt?: Scalars['Bytes'] | null
  owner_gte?: Scalars['Bytes'] | null
  owner_lte?: Scalars['Bytes'] | null
  owner_in?: Scalars['Bytes'][] | null
  owner_not_in?: Scalars['Bytes'][] | null
  owner_contains?: Scalars['Bytes'] | null
  owner_not_contains?: Scalars['Bytes'] | null
  origin?: Scalars['Bytes'] | null
  origin_not?: Scalars['Bytes'] | null
  origin_gt?: Scalars['Bytes'] | null
  origin_lt?: Scalars['Bytes'] | null
  origin_gte?: Scalars['Bytes'] | null
  origin_lte?: Scalars['Bytes'] | null
  origin_in?: Scalars['Bytes'][] | null
  origin_not_in?: Scalars['Bytes'][] | null
  origin_contains?: Scalars['Bytes'] | null
  origin_not_contains?: Scalars['Bytes'] | null
  amount?: Scalars['BigInt'] | null
  amount_not?: Scalars['BigInt'] | null
  amount_gt?: Scalars['BigInt'] | null
  amount_lt?: Scalars['BigInt'] | null
  amount_gte?: Scalars['BigInt'] | null
  amount_lte?: Scalars['BigInt'] | null
  amount_in?: Scalars['BigInt'][] | null
  amount_not_in?: Scalars['BigInt'][] | null
  amount0?: Scalars['BigDecimal'] | null
  amount0_not?: Scalars['BigDecimal'] | null
  amount0_gt?: Scalars['BigDecimal'] | null
  amount0_lt?: Scalars['BigDecimal'] | null
  amount0_gte?: Scalars['BigDecimal'] | null
  amount0_lte?: Scalars['BigDecimal'] | null
  amount0_in?: Scalars['BigDecimal'][] | null
  amount0_not_in?: Scalars['BigDecimal'][] | null
  amount1?: Scalars['BigDecimal'] | null
  amount1_not?: Scalars['BigDecimal'] | null
  amount1_gt?: Scalars['BigDecimal'] | null
  amount1_lt?: Scalars['BigDecimal'] | null
  amount1_gte?: Scalars['BigDecimal'] | null
  amount1_lte?: Scalars['BigDecimal'] | null
  amount1_in?: Scalars['BigDecimal'][] | null
  amount1_not_in?: Scalars['BigDecimal'][] | null
  amountUSD?: Scalars['BigDecimal'] | null
  amountUSD_not?: Scalars['BigDecimal'] | null
  amountUSD_gt?: Scalars['BigDecimal'] | null
  amountUSD_lt?: Scalars['BigDecimal'] | null
  amountUSD_gte?: Scalars['BigDecimal'] | null
  amountUSD_lte?: Scalars['BigDecimal'] | null
  amountUSD_in?: Scalars['BigDecimal'][] | null
  amountUSD_not_in?: Scalars['BigDecimal'][] | null
  tickLower?: Scalars['BigInt'] | null
  tickLower_not?: Scalars['BigInt'] | null
  tickLower_gt?: Scalars['BigInt'] | null
  tickLower_lt?: Scalars['BigInt'] | null
  tickLower_gte?: Scalars['BigInt'] | null
  tickLower_lte?: Scalars['BigInt'] | null
  tickLower_in?: Scalars['BigInt'][] | null
  tickLower_not_in?: Scalars['BigInt'][] | null
  tickUpper?: Scalars['BigInt'] | null
  tickUpper_not?: Scalars['BigInt'] | null
  tickUpper_gt?: Scalars['BigInt'] | null
  tickUpper_lt?: Scalars['BigInt'] | null
  tickUpper_gte?: Scalars['BigInt'] | null
  tickUpper_lte?: Scalars['BigInt'] | null
  tickUpper_in?: Scalars['BigInt'][] | null
  tickUpper_not_in?: Scalars['BigInt'][] | null
  logIndex?: Scalars['BigInt'] | null
  logIndex_not?: Scalars['BigInt'] | null
  logIndex_gt?: Scalars['BigInt'] | null
  logIndex_lt?: Scalars['BigInt'] | null
  logIndex_gte?: Scalars['BigInt'] | null
  logIndex_lte?: Scalars['BigInt'] | null
  logIndex_in?: Scalars['BigInt'][] | null
  logIndex_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Burn_filter | null)[] | null
  or?: (Burn_filter | null)[] | null
}

export interface CollectGenqlSelection {
  id?: boolean | number
  transaction?: TransactionGenqlSelection
  timestamp?: boolean | number
  pool?: PoolGenqlSelection
  owner?: boolean | number
  amount0?: boolean | number
  amount1?: boolean | number
  amountUSD?: boolean | number
  tickLower?: boolean | number
  tickUpper?: boolean | number
  logIndex?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Collect_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  owner?: Scalars['Bytes'] | null
  owner_not?: Scalars['Bytes'] | null
  owner_gt?: Scalars['Bytes'] | null
  owner_lt?: Scalars['Bytes'] | null
  owner_gte?: Scalars['Bytes'] | null
  owner_lte?: Scalars['Bytes'] | null
  owner_in?: Scalars['Bytes'][] | null
  owner_not_in?: Scalars['Bytes'][] | null
  owner_contains?: Scalars['Bytes'] | null
  owner_not_contains?: Scalars['Bytes'] | null
  amount0?: Scalars['BigDecimal'] | null
  amount0_not?: Scalars['BigDecimal'] | null
  amount0_gt?: Scalars['BigDecimal'] | null
  amount0_lt?: Scalars['BigDecimal'] | null
  amount0_gte?: Scalars['BigDecimal'] | null
  amount0_lte?: Scalars['BigDecimal'] | null
  amount0_in?: Scalars['BigDecimal'][] | null
  amount0_not_in?: Scalars['BigDecimal'][] | null
  amount1?: Scalars['BigDecimal'] | null
  amount1_not?: Scalars['BigDecimal'] | null
  amount1_gt?: Scalars['BigDecimal'] | null
  amount1_lt?: Scalars['BigDecimal'] | null
  amount1_gte?: Scalars['BigDecimal'] | null
  amount1_lte?: Scalars['BigDecimal'] | null
  amount1_in?: Scalars['BigDecimal'][] | null
  amount1_not_in?: Scalars['BigDecimal'][] | null
  amountUSD?: Scalars['BigDecimal'] | null
  amountUSD_not?: Scalars['BigDecimal'] | null
  amountUSD_gt?: Scalars['BigDecimal'] | null
  amountUSD_lt?: Scalars['BigDecimal'] | null
  amountUSD_gte?: Scalars['BigDecimal'] | null
  amountUSD_lte?: Scalars['BigDecimal'] | null
  amountUSD_in?: Scalars['BigDecimal'][] | null
  amountUSD_not_in?: Scalars['BigDecimal'][] | null
  tickLower?: Scalars['BigInt'] | null
  tickLower_not?: Scalars['BigInt'] | null
  tickLower_gt?: Scalars['BigInt'] | null
  tickLower_lt?: Scalars['BigInt'] | null
  tickLower_gte?: Scalars['BigInt'] | null
  tickLower_lte?: Scalars['BigInt'] | null
  tickLower_in?: Scalars['BigInt'][] | null
  tickLower_not_in?: Scalars['BigInt'][] | null
  tickUpper?: Scalars['BigInt'] | null
  tickUpper_not?: Scalars['BigInt'] | null
  tickUpper_gt?: Scalars['BigInt'] | null
  tickUpper_lt?: Scalars['BigInt'] | null
  tickUpper_gte?: Scalars['BigInt'] | null
  tickUpper_lte?: Scalars['BigInt'] | null
  tickUpper_in?: Scalars['BigInt'][] | null
  tickUpper_not_in?: Scalars['BigInt'][] | null
  logIndex?: Scalars['BigInt'] | null
  logIndex_not?: Scalars['BigInt'] | null
  logIndex_gt?: Scalars['BigInt'] | null
  logIndex_lt?: Scalars['BigInt'] | null
  logIndex_gte?: Scalars['BigInt'] | null
  logIndex_lte?: Scalars['BigInt'] | null
  logIndex_in?: Scalars['BigInt'][] | null
  logIndex_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Collect_filter | null)[] | null
  or?: (Collect_filter | null)[] | null
}

export interface FactoryGenqlSelection {
  id?: boolean | number
  poolCount?: boolean | number
  txCount?: boolean | number
  totalVolumeUSD?: boolean | number
  totalVolumeETH?: boolean | number
  totalFeesUSD?: boolean | number
  totalFeesETH?: boolean | number
  untrackedVolumeUSD?: boolean | number
  totalValueLockedUSD?: boolean | number
  totalValueLockedETH?: boolean | number
  totalValueLockedUSDUntracked?: boolean | number
  totalValueLockedETHUntracked?: boolean | number
  owner?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Factory_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  poolCount?: Scalars['BigInt'] | null
  poolCount_not?: Scalars['BigInt'] | null
  poolCount_gt?: Scalars['BigInt'] | null
  poolCount_lt?: Scalars['BigInt'] | null
  poolCount_gte?: Scalars['BigInt'] | null
  poolCount_lte?: Scalars['BigInt'] | null
  poolCount_in?: Scalars['BigInt'][] | null
  poolCount_not_in?: Scalars['BigInt'][] | null
  txCount?: Scalars['BigInt'] | null
  txCount_not?: Scalars['BigInt'] | null
  txCount_gt?: Scalars['BigInt'] | null
  txCount_lt?: Scalars['BigInt'] | null
  txCount_gte?: Scalars['BigInt'] | null
  txCount_lte?: Scalars['BigInt'] | null
  txCount_in?: Scalars['BigInt'][] | null
  txCount_not_in?: Scalars['BigInt'][] | null
  totalVolumeUSD?: Scalars['BigDecimal'] | null
  totalVolumeUSD_not?: Scalars['BigDecimal'] | null
  totalVolumeUSD_gt?: Scalars['BigDecimal'] | null
  totalVolumeUSD_lt?: Scalars['BigDecimal'] | null
  totalVolumeUSD_gte?: Scalars['BigDecimal'] | null
  totalVolumeUSD_lte?: Scalars['BigDecimal'] | null
  totalVolumeUSD_in?: Scalars['BigDecimal'][] | null
  totalVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  totalVolumeETH?: Scalars['BigDecimal'] | null
  totalVolumeETH_not?: Scalars['BigDecimal'] | null
  totalVolumeETH_gt?: Scalars['BigDecimal'] | null
  totalVolumeETH_lt?: Scalars['BigDecimal'] | null
  totalVolumeETH_gte?: Scalars['BigDecimal'] | null
  totalVolumeETH_lte?: Scalars['BigDecimal'] | null
  totalVolumeETH_in?: Scalars['BigDecimal'][] | null
  totalVolumeETH_not_in?: Scalars['BigDecimal'][] | null
  totalFeesUSD?: Scalars['BigDecimal'] | null
  totalFeesUSD_not?: Scalars['BigDecimal'] | null
  totalFeesUSD_gt?: Scalars['BigDecimal'] | null
  totalFeesUSD_lt?: Scalars['BigDecimal'] | null
  totalFeesUSD_gte?: Scalars['BigDecimal'] | null
  totalFeesUSD_lte?: Scalars['BigDecimal'] | null
  totalFeesUSD_in?: Scalars['BigDecimal'][] | null
  totalFeesUSD_not_in?: Scalars['BigDecimal'][] | null
  totalFeesETH?: Scalars['BigDecimal'] | null
  totalFeesETH_not?: Scalars['BigDecimal'] | null
  totalFeesETH_gt?: Scalars['BigDecimal'] | null
  totalFeesETH_lt?: Scalars['BigDecimal'] | null
  totalFeesETH_gte?: Scalars['BigDecimal'] | null
  totalFeesETH_lte?: Scalars['BigDecimal'] | null
  totalFeesETH_in?: Scalars['BigDecimal'][] | null
  totalFeesETH_not_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_not?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedETH?: Scalars['BigDecimal'] | null
  totalValueLockedETH_not?: Scalars['BigDecimal'] | null
  totalValueLockedETH_gt?: Scalars['BigDecimal'] | null
  totalValueLockedETH_lt?: Scalars['BigDecimal'] | null
  totalValueLockedETH_gte?: Scalars['BigDecimal'] | null
  totalValueLockedETH_lte?: Scalars['BigDecimal'] | null
  totalValueLockedETH_in?: Scalars['BigDecimal'][] | null
  totalValueLockedETH_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSDUntracked?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSDUntracked_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedETHUntracked?: Scalars['BigDecimal'] | null
  totalValueLockedETHUntracked_not?: Scalars['BigDecimal'] | null
  totalValueLockedETHUntracked_gt?: Scalars['BigDecimal'] | null
  totalValueLockedETHUntracked_lt?: Scalars['BigDecimal'] | null
  totalValueLockedETHUntracked_gte?: Scalars['BigDecimal'] | null
  totalValueLockedETHUntracked_lte?: Scalars['BigDecimal'] | null
  totalValueLockedETHUntracked_in?: Scalars['BigDecimal'][] | null
  totalValueLockedETHUntracked_not_in?: Scalars['BigDecimal'][] | null
  owner?: Scalars['ID'] | null
  owner_not?: Scalars['ID'] | null
  owner_gt?: Scalars['ID'] | null
  owner_lt?: Scalars['ID'] | null
  owner_gte?: Scalars['ID'] | null
  owner_lte?: Scalars['ID'] | null
  owner_in?: Scalars['ID'][] | null
  owner_not_in?: Scalars['ID'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Factory_filter | null)[] | null
  or?: (Factory_filter | null)[] | null
}

export interface FlashGenqlSelection {
  id?: boolean | number
  transaction?: TransactionGenqlSelection
  timestamp?: boolean | number
  pool?: PoolGenqlSelection
  sender?: boolean | number
  recipient?: boolean | number
  amount0?: boolean | number
  amount1?: boolean | number
  amountUSD?: boolean | number
  amount0Paid?: boolean | number
  amount1Paid?: boolean | number
  logIndex?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Flash_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  sender?: Scalars['Bytes'] | null
  sender_not?: Scalars['Bytes'] | null
  sender_gt?: Scalars['Bytes'] | null
  sender_lt?: Scalars['Bytes'] | null
  sender_gte?: Scalars['Bytes'] | null
  sender_lte?: Scalars['Bytes'] | null
  sender_in?: Scalars['Bytes'][] | null
  sender_not_in?: Scalars['Bytes'][] | null
  sender_contains?: Scalars['Bytes'] | null
  sender_not_contains?: Scalars['Bytes'] | null
  recipient?: Scalars['Bytes'] | null
  recipient_not?: Scalars['Bytes'] | null
  recipient_gt?: Scalars['Bytes'] | null
  recipient_lt?: Scalars['Bytes'] | null
  recipient_gte?: Scalars['Bytes'] | null
  recipient_lte?: Scalars['Bytes'] | null
  recipient_in?: Scalars['Bytes'][] | null
  recipient_not_in?: Scalars['Bytes'][] | null
  recipient_contains?: Scalars['Bytes'] | null
  recipient_not_contains?: Scalars['Bytes'] | null
  amount0?: Scalars['BigDecimal'] | null
  amount0_not?: Scalars['BigDecimal'] | null
  amount0_gt?: Scalars['BigDecimal'] | null
  amount0_lt?: Scalars['BigDecimal'] | null
  amount0_gte?: Scalars['BigDecimal'] | null
  amount0_lte?: Scalars['BigDecimal'] | null
  amount0_in?: Scalars['BigDecimal'][] | null
  amount0_not_in?: Scalars['BigDecimal'][] | null
  amount1?: Scalars['BigDecimal'] | null
  amount1_not?: Scalars['BigDecimal'] | null
  amount1_gt?: Scalars['BigDecimal'] | null
  amount1_lt?: Scalars['BigDecimal'] | null
  amount1_gte?: Scalars['BigDecimal'] | null
  amount1_lte?: Scalars['BigDecimal'] | null
  amount1_in?: Scalars['BigDecimal'][] | null
  amount1_not_in?: Scalars['BigDecimal'][] | null
  amountUSD?: Scalars['BigDecimal'] | null
  amountUSD_not?: Scalars['BigDecimal'] | null
  amountUSD_gt?: Scalars['BigDecimal'] | null
  amountUSD_lt?: Scalars['BigDecimal'] | null
  amountUSD_gte?: Scalars['BigDecimal'] | null
  amountUSD_lte?: Scalars['BigDecimal'] | null
  amountUSD_in?: Scalars['BigDecimal'][] | null
  amountUSD_not_in?: Scalars['BigDecimal'][] | null
  amount0Paid?: Scalars['BigDecimal'] | null
  amount0Paid_not?: Scalars['BigDecimal'] | null
  amount0Paid_gt?: Scalars['BigDecimal'] | null
  amount0Paid_lt?: Scalars['BigDecimal'] | null
  amount0Paid_gte?: Scalars['BigDecimal'] | null
  amount0Paid_lte?: Scalars['BigDecimal'] | null
  amount0Paid_in?: Scalars['BigDecimal'][] | null
  amount0Paid_not_in?: Scalars['BigDecimal'][] | null
  amount1Paid?: Scalars['BigDecimal'] | null
  amount1Paid_not?: Scalars['BigDecimal'] | null
  amount1Paid_gt?: Scalars['BigDecimal'] | null
  amount1Paid_lt?: Scalars['BigDecimal'] | null
  amount1Paid_gte?: Scalars['BigDecimal'] | null
  amount1Paid_lte?: Scalars['BigDecimal'] | null
  amount1Paid_in?: Scalars['BigDecimal'][] | null
  amount1Paid_not_in?: Scalars['BigDecimal'][] | null
  logIndex?: Scalars['BigInt'] | null
  logIndex_not?: Scalars['BigInt'] | null
  logIndex_gt?: Scalars['BigInt'] | null
  logIndex_lt?: Scalars['BigInt'] | null
  logIndex_gte?: Scalars['BigInt'] | null
  logIndex_lte?: Scalars['BigInt'] | null
  logIndex_in?: Scalars['BigInt'][] | null
  logIndex_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Flash_filter | null)[] | null
  or?: (Flash_filter | null)[] | null
}

export interface MintGenqlSelection {
  id?: boolean | number
  transaction?: TransactionGenqlSelection
  timestamp?: boolean | number
  pool?: PoolGenqlSelection
  token0?: TokenGenqlSelection
  token1?: TokenGenqlSelection
  owner?: boolean | number
  sender?: boolean | number
  origin?: boolean | number
  amount?: boolean | number
  amount0?: boolean | number
  amount1?: boolean | number
  amountUSD?: boolean | number
  tickLower?: boolean | number
  tickUpper?: boolean | number
  logIndex?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Mint_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  token0?: Scalars['String'] | null
  token0_not?: Scalars['String'] | null
  token0_gt?: Scalars['String'] | null
  token0_lt?: Scalars['String'] | null
  token0_gte?: Scalars['String'] | null
  token0_lte?: Scalars['String'] | null
  token0_in?: Scalars['String'][] | null
  token0_not_in?: Scalars['String'][] | null
  token0_contains?: Scalars['String'] | null
  token0_contains_nocase?: Scalars['String'] | null
  token0_not_contains?: Scalars['String'] | null
  token0_not_contains_nocase?: Scalars['String'] | null
  token0_starts_with?: Scalars['String'] | null
  token0_starts_with_nocase?: Scalars['String'] | null
  token0_not_starts_with?: Scalars['String'] | null
  token0_not_starts_with_nocase?: Scalars['String'] | null
  token0_ends_with?: Scalars['String'] | null
  token0_ends_with_nocase?: Scalars['String'] | null
  token0_not_ends_with?: Scalars['String'] | null
  token0_not_ends_with_nocase?: Scalars['String'] | null
  token0_?: Token_filter | null
  token1?: Scalars['String'] | null
  token1_not?: Scalars['String'] | null
  token1_gt?: Scalars['String'] | null
  token1_lt?: Scalars['String'] | null
  token1_gte?: Scalars['String'] | null
  token1_lte?: Scalars['String'] | null
  token1_in?: Scalars['String'][] | null
  token1_not_in?: Scalars['String'][] | null
  token1_contains?: Scalars['String'] | null
  token1_contains_nocase?: Scalars['String'] | null
  token1_not_contains?: Scalars['String'] | null
  token1_not_contains_nocase?: Scalars['String'] | null
  token1_starts_with?: Scalars['String'] | null
  token1_starts_with_nocase?: Scalars['String'] | null
  token1_not_starts_with?: Scalars['String'] | null
  token1_not_starts_with_nocase?: Scalars['String'] | null
  token1_ends_with?: Scalars['String'] | null
  token1_ends_with_nocase?: Scalars['String'] | null
  token1_not_ends_with?: Scalars['String'] | null
  token1_not_ends_with_nocase?: Scalars['String'] | null
  token1_?: Token_filter | null
  owner?: Scalars['Bytes'] | null
  owner_not?: Scalars['Bytes'] | null
  owner_gt?: Scalars['Bytes'] | null
  owner_lt?: Scalars['Bytes'] | null
  owner_gte?: Scalars['Bytes'] | null
  owner_lte?: Scalars['Bytes'] | null
  owner_in?: Scalars['Bytes'][] | null
  owner_not_in?: Scalars['Bytes'][] | null
  owner_contains?: Scalars['Bytes'] | null
  owner_not_contains?: Scalars['Bytes'] | null
  sender?: Scalars['Bytes'] | null
  sender_not?: Scalars['Bytes'] | null
  sender_gt?: Scalars['Bytes'] | null
  sender_lt?: Scalars['Bytes'] | null
  sender_gte?: Scalars['Bytes'] | null
  sender_lte?: Scalars['Bytes'] | null
  sender_in?: Scalars['Bytes'][] | null
  sender_not_in?: Scalars['Bytes'][] | null
  sender_contains?: Scalars['Bytes'] | null
  sender_not_contains?: Scalars['Bytes'] | null
  origin?: Scalars['Bytes'] | null
  origin_not?: Scalars['Bytes'] | null
  origin_gt?: Scalars['Bytes'] | null
  origin_lt?: Scalars['Bytes'] | null
  origin_gte?: Scalars['Bytes'] | null
  origin_lte?: Scalars['Bytes'] | null
  origin_in?: Scalars['Bytes'][] | null
  origin_not_in?: Scalars['Bytes'][] | null
  origin_contains?: Scalars['Bytes'] | null
  origin_not_contains?: Scalars['Bytes'] | null
  amount?: Scalars['BigInt'] | null
  amount_not?: Scalars['BigInt'] | null
  amount_gt?: Scalars['BigInt'] | null
  amount_lt?: Scalars['BigInt'] | null
  amount_gte?: Scalars['BigInt'] | null
  amount_lte?: Scalars['BigInt'] | null
  amount_in?: Scalars['BigInt'][] | null
  amount_not_in?: Scalars['BigInt'][] | null
  amount0?: Scalars['BigDecimal'] | null
  amount0_not?: Scalars['BigDecimal'] | null
  amount0_gt?: Scalars['BigDecimal'] | null
  amount0_lt?: Scalars['BigDecimal'] | null
  amount0_gte?: Scalars['BigDecimal'] | null
  amount0_lte?: Scalars['BigDecimal'] | null
  amount0_in?: Scalars['BigDecimal'][] | null
  amount0_not_in?: Scalars['BigDecimal'][] | null
  amount1?: Scalars['BigDecimal'] | null
  amount1_not?: Scalars['BigDecimal'] | null
  amount1_gt?: Scalars['BigDecimal'] | null
  amount1_lt?: Scalars['BigDecimal'] | null
  amount1_gte?: Scalars['BigDecimal'] | null
  amount1_lte?: Scalars['BigDecimal'] | null
  amount1_in?: Scalars['BigDecimal'][] | null
  amount1_not_in?: Scalars['BigDecimal'][] | null
  amountUSD?: Scalars['BigDecimal'] | null
  amountUSD_not?: Scalars['BigDecimal'] | null
  amountUSD_gt?: Scalars['BigDecimal'] | null
  amountUSD_lt?: Scalars['BigDecimal'] | null
  amountUSD_gte?: Scalars['BigDecimal'] | null
  amountUSD_lte?: Scalars['BigDecimal'] | null
  amountUSD_in?: Scalars['BigDecimal'][] | null
  amountUSD_not_in?: Scalars['BigDecimal'][] | null
  tickLower?: Scalars['BigInt'] | null
  tickLower_not?: Scalars['BigInt'] | null
  tickLower_gt?: Scalars['BigInt'] | null
  tickLower_lt?: Scalars['BigInt'] | null
  tickLower_gte?: Scalars['BigInt'] | null
  tickLower_lte?: Scalars['BigInt'] | null
  tickLower_in?: Scalars['BigInt'][] | null
  tickLower_not_in?: Scalars['BigInt'][] | null
  tickUpper?: Scalars['BigInt'] | null
  tickUpper_not?: Scalars['BigInt'] | null
  tickUpper_gt?: Scalars['BigInt'] | null
  tickUpper_lt?: Scalars['BigInt'] | null
  tickUpper_gte?: Scalars['BigInt'] | null
  tickUpper_lte?: Scalars['BigInt'] | null
  tickUpper_in?: Scalars['BigInt'][] | null
  tickUpper_not_in?: Scalars['BigInt'][] | null
  logIndex?: Scalars['BigInt'] | null
  logIndex_not?: Scalars['BigInt'] | null
  logIndex_gt?: Scalars['BigInt'] | null
  logIndex_lt?: Scalars['BigInt'] | null
  logIndex_gte?: Scalars['BigInt'] | null
  logIndex_lte?: Scalars['BigInt'] | null
  logIndex_in?: Scalars['BigInt'][] | null
  logIndex_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Mint_filter | null)[] | null
  or?: (Mint_filter | null)[] | null
}

export interface PoolGenqlSelection {
  id?: boolean | number
  createdAtTimestamp?: boolean | number
  createdAtBlockNumber?: boolean | number
  token0?: TokenGenqlSelection
  token1?: TokenGenqlSelection
  feeTier?: boolean | number
  liquidity?: boolean | number
  sqrtPrice?: boolean | number
  feeGrowthGlobal0X128?: boolean | number
  feeGrowthGlobal1X128?: boolean | number
  token0Price?: boolean | number
  token1Price?: boolean | number
  tick?: boolean | number
  observationIndex?: boolean | number
  volumeToken0?: boolean | number
  volumeToken1?: boolean | number
  volumeUSD?: boolean | number
  untrackedVolumeUSD?: boolean | number
  feesUSD?: boolean | number
  txCount?: boolean | number
  collectedFeesToken0?: boolean | number
  collectedFeesToken1?: boolean | number
  collectedFeesUSD?: boolean | number
  totalValueLockedToken0?: boolean | number
  totalValueLockedToken1?: boolean | number
  totalValueLockedETH?: boolean | number
  totalValueLockedUSD?: boolean | number
  totalValueLockedUSDUntracked?: boolean | number
  liquidityProviderCount?: boolean | number
  poolHourData?: PoolHourDataGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PoolHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PoolHourData_filter | null
    }
  }
  poolDayData?: PoolDayDataGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PoolDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PoolDayData_filter | null
    }
  }
  mints?: MintGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Mint_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Mint_filter | null
    }
  }
  burns?: BurnGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Burn_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Burn_filter | null
    }
  }
  swaps?: SwapGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Swap_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Swap_filter | null
    }
  }
  collects?: CollectGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Collect_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Collect_filter | null
    }
  }
  ticks?: TickGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Tick_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Tick_filter | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PoolDayDataGenqlSelection {
  id?: boolean | number
  date?: boolean | number
  pool?: PoolGenqlSelection
  liquidity?: boolean | number
  sqrtPrice?: boolean | number
  token0Price?: boolean | number
  token1Price?: boolean | number
  tick?: boolean | number
  feeGrowthGlobal0X128?: boolean | number
  feeGrowthGlobal1X128?: boolean | number
  tvlUSD?: boolean | number
  volumeToken0?: boolean | number
  volumeToken1?: boolean | number
  volumeUSD?: boolean | number
  feesUSD?: boolean | number
  txCount?: boolean | number
  open?: boolean | number
  high?: boolean | number
  low?: boolean | number
  close?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PoolDayData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  date?: Scalars['Int'] | null
  date_not?: Scalars['Int'] | null
  date_gt?: Scalars['Int'] | null
  date_lt?: Scalars['Int'] | null
  date_gte?: Scalars['Int'] | null
  date_lte?: Scalars['Int'] | null
  date_in?: Scalars['Int'][] | null
  date_not_in?: Scalars['Int'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  liquidity?: Scalars['BigInt'] | null
  liquidity_not?: Scalars['BigInt'] | null
  liquidity_gt?: Scalars['BigInt'] | null
  liquidity_lt?: Scalars['BigInt'] | null
  liquidity_gte?: Scalars['BigInt'] | null
  liquidity_lte?: Scalars['BigInt'] | null
  liquidity_in?: Scalars['BigInt'][] | null
  liquidity_not_in?: Scalars['BigInt'][] | null
  sqrtPrice?: Scalars['BigInt'] | null
  sqrtPrice_not?: Scalars['BigInt'] | null
  sqrtPrice_gt?: Scalars['BigInt'] | null
  sqrtPrice_lt?: Scalars['BigInt'] | null
  sqrtPrice_gte?: Scalars['BigInt'] | null
  sqrtPrice_lte?: Scalars['BigInt'] | null
  sqrtPrice_in?: Scalars['BigInt'][] | null
  sqrtPrice_not_in?: Scalars['BigInt'][] | null
  token0Price?: Scalars['BigDecimal'] | null
  token0Price_not?: Scalars['BigDecimal'] | null
  token0Price_gt?: Scalars['BigDecimal'] | null
  token0Price_lt?: Scalars['BigDecimal'] | null
  token0Price_gte?: Scalars['BigDecimal'] | null
  token0Price_lte?: Scalars['BigDecimal'] | null
  token0Price_in?: Scalars['BigDecimal'][] | null
  token0Price_not_in?: Scalars['BigDecimal'][] | null
  token1Price?: Scalars['BigDecimal'] | null
  token1Price_not?: Scalars['BigDecimal'] | null
  token1Price_gt?: Scalars['BigDecimal'] | null
  token1Price_lt?: Scalars['BigDecimal'] | null
  token1Price_gte?: Scalars['BigDecimal'] | null
  token1Price_lte?: Scalars['BigDecimal'] | null
  token1Price_in?: Scalars['BigDecimal'][] | null
  token1Price_not_in?: Scalars['BigDecimal'][] | null
  tick?: Scalars['BigInt'] | null
  tick_not?: Scalars['BigInt'] | null
  tick_gt?: Scalars['BigInt'] | null
  tick_lt?: Scalars['BigInt'] | null
  tick_gte?: Scalars['BigInt'] | null
  tick_lte?: Scalars['BigInt'] | null
  tick_in?: Scalars['BigInt'][] | null
  tick_not_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal0X128?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_not?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_gt?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_lt?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_gte?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_lte?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal0X128_not_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal1X128?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_not?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_gt?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_lt?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_gte?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_lte?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal1X128_not_in?: Scalars['BigInt'][] | null
  tvlUSD?: Scalars['BigDecimal'] | null
  tvlUSD_not?: Scalars['BigDecimal'] | null
  tvlUSD_gt?: Scalars['BigDecimal'] | null
  tvlUSD_lt?: Scalars['BigDecimal'] | null
  tvlUSD_gte?: Scalars['BigDecimal'] | null
  tvlUSD_lte?: Scalars['BigDecimal'] | null
  tvlUSD_in?: Scalars['BigDecimal'][] | null
  tvlUSD_not_in?: Scalars['BigDecimal'][] | null
  volumeToken0?: Scalars['BigDecimal'] | null
  volumeToken0_not?: Scalars['BigDecimal'] | null
  volumeToken0_gt?: Scalars['BigDecimal'] | null
  volumeToken0_lt?: Scalars['BigDecimal'] | null
  volumeToken0_gte?: Scalars['BigDecimal'] | null
  volumeToken0_lte?: Scalars['BigDecimal'] | null
  volumeToken0_in?: Scalars['BigDecimal'][] | null
  volumeToken0_not_in?: Scalars['BigDecimal'][] | null
  volumeToken1?: Scalars['BigDecimal'] | null
  volumeToken1_not?: Scalars['BigDecimal'] | null
  volumeToken1_gt?: Scalars['BigDecimal'] | null
  volumeToken1_lt?: Scalars['BigDecimal'] | null
  volumeToken1_gte?: Scalars['BigDecimal'] | null
  volumeToken1_lte?: Scalars['BigDecimal'] | null
  volumeToken1_in?: Scalars['BigDecimal'][] | null
  volumeToken1_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  txCount?: Scalars['BigInt'] | null
  txCount_not?: Scalars['BigInt'] | null
  txCount_gt?: Scalars['BigInt'] | null
  txCount_lt?: Scalars['BigInt'] | null
  txCount_gte?: Scalars['BigInt'] | null
  txCount_lte?: Scalars['BigInt'] | null
  txCount_in?: Scalars['BigInt'][] | null
  txCount_not_in?: Scalars['BigInt'][] | null
  open?: Scalars['BigDecimal'] | null
  open_not?: Scalars['BigDecimal'] | null
  open_gt?: Scalars['BigDecimal'] | null
  open_lt?: Scalars['BigDecimal'] | null
  open_gte?: Scalars['BigDecimal'] | null
  open_lte?: Scalars['BigDecimal'] | null
  open_in?: Scalars['BigDecimal'][] | null
  open_not_in?: Scalars['BigDecimal'][] | null
  high?: Scalars['BigDecimal'] | null
  high_not?: Scalars['BigDecimal'] | null
  high_gt?: Scalars['BigDecimal'] | null
  high_lt?: Scalars['BigDecimal'] | null
  high_gte?: Scalars['BigDecimal'] | null
  high_lte?: Scalars['BigDecimal'] | null
  high_in?: Scalars['BigDecimal'][] | null
  high_not_in?: Scalars['BigDecimal'][] | null
  low?: Scalars['BigDecimal'] | null
  low_not?: Scalars['BigDecimal'] | null
  low_gt?: Scalars['BigDecimal'] | null
  low_lt?: Scalars['BigDecimal'] | null
  low_gte?: Scalars['BigDecimal'] | null
  low_lte?: Scalars['BigDecimal'] | null
  low_in?: Scalars['BigDecimal'][] | null
  low_not_in?: Scalars['BigDecimal'][] | null
  close?: Scalars['BigDecimal'] | null
  close_not?: Scalars['BigDecimal'] | null
  close_gt?: Scalars['BigDecimal'] | null
  close_lt?: Scalars['BigDecimal'] | null
  close_gte?: Scalars['BigDecimal'] | null
  close_lte?: Scalars['BigDecimal'] | null
  close_in?: Scalars['BigDecimal'][] | null
  close_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (PoolDayData_filter | null)[] | null
  or?: (PoolDayData_filter | null)[] | null
}

export interface PoolHourDataGenqlSelection {
  id?: boolean | number
  periodStartUnix?: boolean | number
  pool?: PoolGenqlSelection
  liquidity?: boolean | number
  sqrtPrice?: boolean | number
  token0Price?: boolean | number
  token1Price?: boolean | number
  tick?: boolean | number
  feeGrowthGlobal0X128?: boolean | number
  feeGrowthGlobal1X128?: boolean | number
  tvlUSD?: boolean | number
  volumeToken0?: boolean | number
  volumeToken1?: boolean | number
  volumeUSD?: boolean | number
  feesUSD?: boolean | number
  txCount?: boolean | number
  open?: boolean | number
  high?: boolean | number
  low?: boolean | number
  close?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PoolHourData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  periodStartUnix?: Scalars['Int'] | null
  periodStartUnix_not?: Scalars['Int'] | null
  periodStartUnix_gt?: Scalars['Int'] | null
  periodStartUnix_lt?: Scalars['Int'] | null
  periodStartUnix_gte?: Scalars['Int'] | null
  periodStartUnix_lte?: Scalars['Int'] | null
  periodStartUnix_in?: Scalars['Int'][] | null
  periodStartUnix_not_in?: Scalars['Int'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  liquidity?: Scalars['BigInt'] | null
  liquidity_not?: Scalars['BigInt'] | null
  liquidity_gt?: Scalars['BigInt'] | null
  liquidity_lt?: Scalars['BigInt'] | null
  liquidity_gte?: Scalars['BigInt'] | null
  liquidity_lte?: Scalars['BigInt'] | null
  liquidity_in?: Scalars['BigInt'][] | null
  liquidity_not_in?: Scalars['BigInt'][] | null
  sqrtPrice?: Scalars['BigInt'] | null
  sqrtPrice_not?: Scalars['BigInt'] | null
  sqrtPrice_gt?: Scalars['BigInt'] | null
  sqrtPrice_lt?: Scalars['BigInt'] | null
  sqrtPrice_gte?: Scalars['BigInt'] | null
  sqrtPrice_lte?: Scalars['BigInt'] | null
  sqrtPrice_in?: Scalars['BigInt'][] | null
  sqrtPrice_not_in?: Scalars['BigInt'][] | null
  token0Price?: Scalars['BigDecimal'] | null
  token0Price_not?: Scalars['BigDecimal'] | null
  token0Price_gt?: Scalars['BigDecimal'] | null
  token0Price_lt?: Scalars['BigDecimal'] | null
  token0Price_gte?: Scalars['BigDecimal'] | null
  token0Price_lte?: Scalars['BigDecimal'] | null
  token0Price_in?: Scalars['BigDecimal'][] | null
  token0Price_not_in?: Scalars['BigDecimal'][] | null
  token1Price?: Scalars['BigDecimal'] | null
  token1Price_not?: Scalars['BigDecimal'] | null
  token1Price_gt?: Scalars['BigDecimal'] | null
  token1Price_lt?: Scalars['BigDecimal'] | null
  token1Price_gte?: Scalars['BigDecimal'] | null
  token1Price_lte?: Scalars['BigDecimal'] | null
  token1Price_in?: Scalars['BigDecimal'][] | null
  token1Price_not_in?: Scalars['BigDecimal'][] | null
  tick?: Scalars['BigInt'] | null
  tick_not?: Scalars['BigInt'] | null
  tick_gt?: Scalars['BigInt'] | null
  tick_lt?: Scalars['BigInt'] | null
  tick_gte?: Scalars['BigInt'] | null
  tick_lte?: Scalars['BigInt'] | null
  tick_in?: Scalars['BigInt'][] | null
  tick_not_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal0X128?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_not?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_gt?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_lt?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_gte?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_lte?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal0X128_not_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal1X128?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_not?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_gt?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_lt?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_gte?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_lte?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal1X128_not_in?: Scalars['BigInt'][] | null
  tvlUSD?: Scalars['BigDecimal'] | null
  tvlUSD_not?: Scalars['BigDecimal'] | null
  tvlUSD_gt?: Scalars['BigDecimal'] | null
  tvlUSD_lt?: Scalars['BigDecimal'] | null
  tvlUSD_gte?: Scalars['BigDecimal'] | null
  tvlUSD_lte?: Scalars['BigDecimal'] | null
  tvlUSD_in?: Scalars['BigDecimal'][] | null
  tvlUSD_not_in?: Scalars['BigDecimal'][] | null
  volumeToken0?: Scalars['BigDecimal'] | null
  volumeToken0_not?: Scalars['BigDecimal'] | null
  volumeToken0_gt?: Scalars['BigDecimal'] | null
  volumeToken0_lt?: Scalars['BigDecimal'] | null
  volumeToken0_gte?: Scalars['BigDecimal'] | null
  volumeToken0_lte?: Scalars['BigDecimal'] | null
  volumeToken0_in?: Scalars['BigDecimal'][] | null
  volumeToken0_not_in?: Scalars['BigDecimal'][] | null
  volumeToken1?: Scalars['BigDecimal'] | null
  volumeToken1_not?: Scalars['BigDecimal'] | null
  volumeToken1_gt?: Scalars['BigDecimal'] | null
  volumeToken1_lt?: Scalars['BigDecimal'] | null
  volumeToken1_gte?: Scalars['BigDecimal'] | null
  volumeToken1_lte?: Scalars['BigDecimal'] | null
  volumeToken1_in?: Scalars['BigDecimal'][] | null
  volumeToken1_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  txCount?: Scalars['BigInt'] | null
  txCount_not?: Scalars['BigInt'] | null
  txCount_gt?: Scalars['BigInt'] | null
  txCount_lt?: Scalars['BigInt'] | null
  txCount_gte?: Scalars['BigInt'] | null
  txCount_lte?: Scalars['BigInt'] | null
  txCount_in?: Scalars['BigInt'][] | null
  txCount_not_in?: Scalars['BigInt'][] | null
  open?: Scalars['BigDecimal'] | null
  open_not?: Scalars['BigDecimal'] | null
  open_gt?: Scalars['BigDecimal'] | null
  open_lt?: Scalars['BigDecimal'] | null
  open_gte?: Scalars['BigDecimal'] | null
  open_lte?: Scalars['BigDecimal'] | null
  open_in?: Scalars['BigDecimal'][] | null
  open_not_in?: Scalars['BigDecimal'][] | null
  high?: Scalars['BigDecimal'] | null
  high_not?: Scalars['BigDecimal'] | null
  high_gt?: Scalars['BigDecimal'] | null
  high_lt?: Scalars['BigDecimal'] | null
  high_gte?: Scalars['BigDecimal'] | null
  high_lte?: Scalars['BigDecimal'] | null
  high_in?: Scalars['BigDecimal'][] | null
  high_not_in?: Scalars['BigDecimal'][] | null
  low?: Scalars['BigDecimal'] | null
  low_not?: Scalars['BigDecimal'] | null
  low_gt?: Scalars['BigDecimal'] | null
  low_lt?: Scalars['BigDecimal'] | null
  low_gte?: Scalars['BigDecimal'] | null
  low_lte?: Scalars['BigDecimal'] | null
  low_in?: Scalars['BigDecimal'][] | null
  low_not_in?: Scalars['BigDecimal'][] | null
  close?: Scalars['BigDecimal'] | null
  close_not?: Scalars['BigDecimal'] | null
  close_gt?: Scalars['BigDecimal'] | null
  close_lt?: Scalars['BigDecimal'] | null
  close_gte?: Scalars['BigDecimal'] | null
  close_lte?: Scalars['BigDecimal'] | null
  close_in?: Scalars['BigDecimal'][] | null
  close_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (PoolHourData_filter | null)[] | null
  or?: (PoolHourData_filter | null)[] | null
}

export interface Pool_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  createdAtTimestamp?: Scalars['BigInt'] | null
  createdAtTimestamp_not?: Scalars['BigInt'] | null
  createdAtTimestamp_gt?: Scalars['BigInt'] | null
  createdAtTimestamp_lt?: Scalars['BigInt'] | null
  createdAtTimestamp_gte?: Scalars['BigInt'] | null
  createdAtTimestamp_lte?: Scalars['BigInt'] | null
  createdAtTimestamp_in?: Scalars['BigInt'][] | null
  createdAtTimestamp_not_in?: Scalars['BigInt'][] | null
  createdAtBlockNumber?: Scalars['BigInt'] | null
  createdAtBlockNumber_not?: Scalars['BigInt'] | null
  createdAtBlockNumber_gt?: Scalars['BigInt'] | null
  createdAtBlockNumber_lt?: Scalars['BigInt'] | null
  createdAtBlockNumber_gte?: Scalars['BigInt'] | null
  createdAtBlockNumber_lte?: Scalars['BigInt'] | null
  createdAtBlockNumber_in?: Scalars['BigInt'][] | null
  createdAtBlockNumber_not_in?: Scalars['BigInt'][] | null
  token0?: Scalars['String'] | null
  token0_not?: Scalars['String'] | null
  token0_gt?: Scalars['String'] | null
  token0_lt?: Scalars['String'] | null
  token0_gte?: Scalars['String'] | null
  token0_lte?: Scalars['String'] | null
  token0_in?: Scalars['String'][] | null
  token0_not_in?: Scalars['String'][] | null
  token0_contains?: Scalars['String'] | null
  token0_contains_nocase?: Scalars['String'] | null
  token0_not_contains?: Scalars['String'] | null
  token0_not_contains_nocase?: Scalars['String'] | null
  token0_starts_with?: Scalars['String'] | null
  token0_starts_with_nocase?: Scalars['String'] | null
  token0_not_starts_with?: Scalars['String'] | null
  token0_not_starts_with_nocase?: Scalars['String'] | null
  token0_ends_with?: Scalars['String'] | null
  token0_ends_with_nocase?: Scalars['String'] | null
  token0_not_ends_with?: Scalars['String'] | null
  token0_not_ends_with_nocase?: Scalars['String'] | null
  token0_?: Token_filter | null
  token1?: Scalars['String'] | null
  token1_not?: Scalars['String'] | null
  token1_gt?: Scalars['String'] | null
  token1_lt?: Scalars['String'] | null
  token1_gte?: Scalars['String'] | null
  token1_lte?: Scalars['String'] | null
  token1_in?: Scalars['String'][] | null
  token1_not_in?: Scalars['String'][] | null
  token1_contains?: Scalars['String'] | null
  token1_contains_nocase?: Scalars['String'] | null
  token1_not_contains?: Scalars['String'] | null
  token1_not_contains_nocase?: Scalars['String'] | null
  token1_starts_with?: Scalars['String'] | null
  token1_starts_with_nocase?: Scalars['String'] | null
  token1_not_starts_with?: Scalars['String'] | null
  token1_not_starts_with_nocase?: Scalars['String'] | null
  token1_ends_with?: Scalars['String'] | null
  token1_ends_with_nocase?: Scalars['String'] | null
  token1_not_ends_with?: Scalars['String'] | null
  token1_not_ends_with_nocase?: Scalars['String'] | null
  token1_?: Token_filter | null
  feeTier?: Scalars['BigInt'] | null
  feeTier_not?: Scalars['BigInt'] | null
  feeTier_gt?: Scalars['BigInt'] | null
  feeTier_lt?: Scalars['BigInt'] | null
  feeTier_gte?: Scalars['BigInt'] | null
  feeTier_lte?: Scalars['BigInt'] | null
  feeTier_in?: Scalars['BigInt'][] | null
  feeTier_not_in?: Scalars['BigInt'][] | null
  liquidity?: Scalars['BigInt'] | null
  liquidity_not?: Scalars['BigInt'] | null
  liquidity_gt?: Scalars['BigInt'] | null
  liquidity_lt?: Scalars['BigInt'] | null
  liquidity_gte?: Scalars['BigInt'] | null
  liquidity_lte?: Scalars['BigInt'] | null
  liquidity_in?: Scalars['BigInt'][] | null
  liquidity_not_in?: Scalars['BigInt'][] | null
  sqrtPrice?: Scalars['BigInt'] | null
  sqrtPrice_not?: Scalars['BigInt'] | null
  sqrtPrice_gt?: Scalars['BigInt'] | null
  sqrtPrice_lt?: Scalars['BigInt'] | null
  sqrtPrice_gte?: Scalars['BigInt'] | null
  sqrtPrice_lte?: Scalars['BigInt'] | null
  sqrtPrice_in?: Scalars['BigInt'][] | null
  sqrtPrice_not_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal0X128?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_not?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_gt?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_lt?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_gte?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_lte?: Scalars['BigInt'] | null
  feeGrowthGlobal0X128_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal0X128_not_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal1X128?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_not?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_gt?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_lt?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_gte?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_lte?: Scalars['BigInt'] | null
  feeGrowthGlobal1X128_in?: Scalars['BigInt'][] | null
  feeGrowthGlobal1X128_not_in?: Scalars['BigInt'][] | null
  token0Price?: Scalars['BigDecimal'] | null
  token0Price_not?: Scalars['BigDecimal'] | null
  token0Price_gt?: Scalars['BigDecimal'] | null
  token0Price_lt?: Scalars['BigDecimal'] | null
  token0Price_gte?: Scalars['BigDecimal'] | null
  token0Price_lte?: Scalars['BigDecimal'] | null
  token0Price_in?: Scalars['BigDecimal'][] | null
  token0Price_not_in?: Scalars['BigDecimal'][] | null
  token1Price?: Scalars['BigDecimal'] | null
  token1Price_not?: Scalars['BigDecimal'] | null
  token1Price_gt?: Scalars['BigDecimal'] | null
  token1Price_lt?: Scalars['BigDecimal'] | null
  token1Price_gte?: Scalars['BigDecimal'] | null
  token1Price_lte?: Scalars['BigDecimal'] | null
  token1Price_in?: Scalars['BigDecimal'][] | null
  token1Price_not_in?: Scalars['BigDecimal'][] | null
  tick?: Scalars['BigInt'] | null
  tick_not?: Scalars['BigInt'] | null
  tick_gt?: Scalars['BigInt'] | null
  tick_lt?: Scalars['BigInt'] | null
  tick_gte?: Scalars['BigInt'] | null
  tick_lte?: Scalars['BigInt'] | null
  tick_in?: Scalars['BigInt'][] | null
  tick_not_in?: Scalars['BigInt'][] | null
  observationIndex?: Scalars['BigInt'] | null
  observationIndex_not?: Scalars['BigInt'] | null
  observationIndex_gt?: Scalars['BigInt'] | null
  observationIndex_lt?: Scalars['BigInt'] | null
  observationIndex_gte?: Scalars['BigInt'] | null
  observationIndex_lte?: Scalars['BigInt'] | null
  observationIndex_in?: Scalars['BigInt'][] | null
  observationIndex_not_in?: Scalars['BigInt'][] | null
  volumeToken0?: Scalars['BigDecimal'] | null
  volumeToken0_not?: Scalars['BigDecimal'] | null
  volumeToken0_gt?: Scalars['BigDecimal'] | null
  volumeToken0_lt?: Scalars['BigDecimal'] | null
  volumeToken0_gte?: Scalars['BigDecimal'] | null
  volumeToken0_lte?: Scalars['BigDecimal'] | null
  volumeToken0_in?: Scalars['BigDecimal'][] | null
  volumeToken0_not_in?: Scalars['BigDecimal'][] | null
  volumeToken1?: Scalars['BigDecimal'] | null
  volumeToken1_not?: Scalars['BigDecimal'] | null
  volumeToken1_gt?: Scalars['BigDecimal'] | null
  volumeToken1_lt?: Scalars['BigDecimal'] | null
  volumeToken1_gte?: Scalars['BigDecimal'] | null
  volumeToken1_lte?: Scalars['BigDecimal'] | null
  volumeToken1_in?: Scalars['BigDecimal'][] | null
  volumeToken1_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_not?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  txCount?: Scalars['BigInt'] | null
  txCount_not?: Scalars['BigInt'] | null
  txCount_gt?: Scalars['BigInt'] | null
  txCount_lt?: Scalars['BigInt'] | null
  txCount_gte?: Scalars['BigInt'] | null
  txCount_lte?: Scalars['BigInt'] | null
  txCount_in?: Scalars['BigInt'][] | null
  txCount_not_in?: Scalars['BigInt'][] | null
  collectedFeesToken0?: Scalars['BigDecimal'] | null
  collectedFeesToken0_not?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1?: Scalars['BigDecimal'] | null
  collectedFeesToken1_not?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesUSD?: Scalars['BigDecimal'] | null
  collectedFeesUSD_not?: Scalars['BigDecimal'] | null
  collectedFeesUSD_gt?: Scalars['BigDecimal'] | null
  collectedFeesUSD_lt?: Scalars['BigDecimal'] | null
  collectedFeesUSD_gte?: Scalars['BigDecimal'] | null
  collectedFeesUSD_lte?: Scalars['BigDecimal'] | null
  collectedFeesUSD_in?: Scalars['BigDecimal'][] | null
  collectedFeesUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedToken0?: Scalars['BigDecimal'] | null
  totalValueLockedToken0_not?: Scalars['BigDecimal'] | null
  totalValueLockedToken0_gt?: Scalars['BigDecimal'] | null
  totalValueLockedToken0_lt?: Scalars['BigDecimal'] | null
  totalValueLockedToken0_gte?: Scalars['BigDecimal'] | null
  totalValueLockedToken0_lte?: Scalars['BigDecimal'] | null
  totalValueLockedToken0_in?: Scalars['BigDecimal'][] | null
  totalValueLockedToken0_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedToken1?: Scalars['BigDecimal'] | null
  totalValueLockedToken1_not?: Scalars['BigDecimal'] | null
  totalValueLockedToken1_gt?: Scalars['BigDecimal'] | null
  totalValueLockedToken1_lt?: Scalars['BigDecimal'] | null
  totalValueLockedToken1_gte?: Scalars['BigDecimal'] | null
  totalValueLockedToken1_lte?: Scalars['BigDecimal'] | null
  totalValueLockedToken1_in?: Scalars['BigDecimal'][] | null
  totalValueLockedToken1_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedETH?: Scalars['BigDecimal'] | null
  totalValueLockedETH_not?: Scalars['BigDecimal'] | null
  totalValueLockedETH_gt?: Scalars['BigDecimal'] | null
  totalValueLockedETH_lt?: Scalars['BigDecimal'] | null
  totalValueLockedETH_gte?: Scalars['BigDecimal'] | null
  totalValueLockedETH_lte?: Scalars['BigDecimal'] | null
  totalValueLockedETH_in?: Scalars['BigDecimal'][] | null
  totalValueLockedETH_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSDUntracked?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSDUntracked_not_in?: Scalars['BigDecimal'][] | null
  liquidityProviderCount?: Scalars['BigInt'] | null
  liquidityProviderCount_not?: Scalars['BigInt'] | null
  liquidityProviderCount_gt?: Scalars['BigInt'] | null
  liquidityProviderCount_lt?: Scalars['BigInt'] | null
  liquidityProviderCount_gte?: Scalars['BigInt'] | null
  liquidityProviderCount_lte?: Scalars['BigInt'] | null
  liquidityProviderCount_in?: Scalars['BigInt'][] | null
  liquidityProviderCount_not_in?: Scalars['BigInt'][] | null
  poolHourData_?: PoolHourData_filter | null
  poolDayData_?: PoolDayData_filter | null
  mints_?: Mint_filter | null
  burns_?: Burn_filter | null
  swaps_?: Swap_filter | null
  collects_?: Collect_filter | null
  ticks_?: Tick_filter | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Pool_filter | null)[] | null
  or?: (Pool_filter | null)[] | null
}

export interface PositionGenqlSelection {
  id?: boolean | number
  owner?: boolean | number
  pool?: PoolGenqlSelection
  token0?: TokenGenqlSelection
  token1?: TokenGenqlSelection
  tickLower?: TickGenqlSelection
  tickUpper?: TickGenqlSelection
  liquidity?: boolean | number
  depositedToken0?: boolean | number
  depositedToken1?: boolean | number
  withdrawnToken0?: boolean | number
  withdrawnToken1?: boolean | number
  collectedFeesToken0?: boolean | number
  collectedFeesToken1?: boolean | number
  transaction?: TransactionGenqlSelection
  feeGrowthInside0LastX128?: boolean | number
  feeGrowthInside1LastX128?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PositionSnapshotGenqlSelection {
  id?: boolean | number
  owner?: boolean | number
  pool?: PoolGenqlSelection
  position?: PositionGenqlSelection
  blockNumber?: boolean | number
  timestamp?: boolean | number
  liquidity?: boolean | number
  depositedToken0?: boolean | number
  depositedToken1?: boolean | number
  withdrawnToken0?: boolean | number
  withdrawnToken1?: boolean | number
  collectedFeesToken0?: boolean | number
  collectedFeesToken1?: boolean | number
  transaction?: TransactionGenqlSelection
  feeGrowthInside0LastX128?: boolean | number
  feeGrowthInside1LastX128?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PositionSnapshot_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  owner?: Scalars['Bytes'] | null
  owner_not?: Scalars['Bytes'] | null
  owner_gt?: Scalars['Bytes'] | null
  owner_lt?: Scalars['Bytes'] | null
  owner_gte?: Scalars['Bytes'] | null
  owner_lte?: Scalars['Bytes'] | null
  owner_in?: Scalars['Bytes'][] | null
  owner_not_in?: Scalars['Bytes'][] | null
  owner_contains?: Scalars['Bytes'] | null
  owner_not_contains?: Scalars['Bytes'] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  position?: Scalars['String'] | null
  position_not?: Scalars['String'] | null
  position_gt?: Scalars['String'] | null
  position_lt?: Scalars['String'] | null
  position_gte?: Scalars['String'] | null
  position_lte?: Scalars['String'] | null
  position_in?: Scalars['String'][] | null
  position_not_in?: Scalars['String'][] | null
  position_contains?: Scalars['String'] | null
  position_contains_nocase?: Scalars['String'] | null
  position_not_contains?: Scalars['String'] | null
  position_not_contains_nocase?: Scalars['String'] | null
  position_starts_with?: Scalars['String'] | null
  position_starts_with_nocase?: Scalars['String'] | null
  position_not_starts_with?: Scalars['String'] | null
  position_not_starts_with_nocase?: Scalars['String'] | null
  position_ends_with?: Scalars['String'] | null
  position_ends_with_nocase?: Scalars['String'] | null
  position_not_ends_with?: Scalars['String'] | null
  position_not_ends_with_nocase?: Scalars['String'] | null
  position_?: Position_filter | null
  blockNumber?: Scalars['BigInt'] | null
  blockNumber_not?: Scalars['BigInt'] | null
  blockNumber_gt?: Scalars['BigInt'] | null
  blockNumber_lt?: Scalars['BigInt'] | null
  blockNumber_gte?: Scalars['BigInt'] | null
  blockNumber_lte?: Scalars['BigInt'] | null
  blockNumber_in?: Scalars['BigInt'][] | null
  blockNumber_not_in?: Scalars['BigInt'][] | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  liquidity?: Scalars['BigInt'] | null
  liquidity_not?: Scalars['BigInt'] | null
  liquidity_gt?: Scalars['BigInt'] | null
  liquidity_lt?: Scalars['BigInt'] | null
  liquidity_gte?: Scalars['BigInt'] | null
  liquidity_lte?: Scalars['BigInt'] | null
  liquidity_in?: Scalars['BigInt'][] | null
  liquidity_not_in?: Scalars['BigInt'][] | null
  depositedToken0?: Scalars['BigDecimal'] | null
  depositedToken0_not?: Scalars['BigDecimal'] | null
  depositedToken0_gt?: Scalars['BigDecimal'] | null
  depositedToken0_lt?: Scalars['BigDecimal'] | null
  depositedToken0_gte?: Scalars['BigDecimal'] | null
  depositedToken0_lte?: Scalars['BigDecimal'] | null
  depositedToken0_in?: Scalars['BigDecimal'][] | null
  depositedToken0_not_in?: Scalars['BigDecimal'][] | null
  depositedToken1?: Scalars['BigDecimal'] | null
  depositedToken1_not?: Scalars['BigDecimal'] | null
  depositedToken1_gt?: Scalars['BigDecimal'] | null
  depositedToken1_lt?: Scalars['BigDecimal'] | null
  depositedToken1_gte?: Scalars['BigDecimal'] | null
  depositedToken1_lte?: Scalars['BigDecimal'] | null
  depositedToken1_in?: Scalars['BigDecimal'][] | null
  depositedToken1_not_in?: Scalars['BigDecimal'][] | null
  withdrawnToken0?: Scalars['BigDecimal'] | null
  withdrawnToken0_not?: Scalars['BigDecimal'] | null
  withdrawnToken0_gt?: Scalars['BigDecimal'] | null
  withdrawnToken0_lt?: Scalars['BigDecimal'] | null
  withdrawnToken0_gte?: Scalars['BigDecimal'] | null
  withdrawnToken0_lte?: Scalars['BigDecimal'] | null
  withdrawnToken0_in?: Scalars['BigDecimal'][] | null
  withdrawnToken0_not_in?: Scalars['BigDecimal'][] | null
  withdrawnToken1?: Scalars['BigDecimal'] | null
  withdrawnToken1_not?: Scalars['BigDecimal'] | null
  withdrawnToken1_gt?: Scalars['BigDecimal'] | null
  withdrawnToken1_lt?: Scalars['BigDecimal'] | null
  withdrawnToken1_gte?: Scalars['BigDecimal'] | null
  withdrawnToken1_lte?: Scalars['BigDecimal'] | null
  withdrawnToken1_in?: Scalars['BigDecimal'][] | null
  withdrawnToken1_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0?: Scalars['BigDecimal'] | null
  collectedFeesToken0_not?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1?: Scalars['BigDecimal'] | null
  collectedFeesToken1_not?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1_not_in?: Scalars['BigDecimal'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  feeGrowthInside0LastX128?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_not?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_gt?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_lt?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_gte?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_lte?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_in?: Scalars['BigInt'][] | null
  feeGrowthInside0LastX128_not_in?: Scalars['BigInt'][] | null
  feeGrowthInside1LastX128?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_not?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_gt?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_lt?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_gte?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_lte?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_in?: Scalars['BigInt'][] | null
  feeGrowthInside1LastX128_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (PositionSnapshot_filter | null)[] | null
  or?: (PositionSnapshot_filter | null)[] | null
}

export interface Position_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  owner?: Scalars['Bytes'] | null
  owner_not?: Scalars['Bytes'] | null
  owner_gt?: Scalars['Bytes'] | null
  owner_lt?: Scalars['Bytes'] | null
  owner_gte?: Scalars['Bytes'] | null
  owner_lte?: Scalars['Bytes'] | null
  owner_in?: Scalars['Bytes'][] | null
  owner_not_in?: Scalars['Bytes'][] | null
  owner_contains?: Scalars['Bytes'] | null
  owner_not_contains?: Scalars['Bytes'] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  token0?: Scalars['String'] | null
  token0_not?: Scalars['String'] | null
  token0_gt?: Scalars['String'] | null
  token0_lt?: Scalars['String'] | null
  token0_gte?: Scalars['String'] | null
  token0_lte?: Scalars['String'] | null
  token0_in?: Scalars['String'][] | null
  token0_not_in?: Scalars['String'][] | null
  token0_contains?: Scalars['String'] | null
  token0_contains_nocase?: Scalars['String'] | null
  token0_not_contains?: Scalars['String'] | null
  token0_not_contains_nocase?: Scalars['String'] | null
  token0_starts_with?: Scalars['String'] | null
  token0_starts_with_nocase?: Scalars['String'] | null
  token0_not_starts_with?: Scalars['String'] | null
  token0_not_starts_with_nocase?: Scalars['String'] | null
  token0_ends_with?: Scalars['String'] | null
  token0_ends_with_nocase?: Scalars['String'] | null
  token0_not_ends_with?: Scalars['String'] | null
  token0_not_ends_with_nocase?: Scalars['String'] | null
  token0_?: Token_filter | null
  token1?: Scalars['String'] | null
  token1_not?: Scalars['String'] | null
  token1_gt?: Scalars['String'] | null
  token1_lt?: Scalars['String'] | null
  token1_gte?: Scalars['String'] | null
  token1_lte?: Scalars['String'] | null
  token1_in?: Scalars['String'][] | null
  token1_not_in?: Scalars['String'][] | null
  token1_contains?: Scalars['String'] | null
  token1_contains_nocase?: Scalars['String'] | null
  token1_not_contains?: Scalars['String'] | null
  token1_not_contains_nocase?: Scalars['String'] | null
  token1_starts_with?: Scalars['String'] | null
  token1_starts_with_nocase?: Scalars['String'] | null
  token1_not_starts_with?: Scalars['String'] | null
  token1_not_starts_with_nocase?: Scalars['String'] | null
  token1_ends_with?: Scalars['String'] | null
  token1_ends_with_nocase?: Scalars['String'] | null
  token1_not_ends_with?: Scalars['String'] | null
  token1_not_ends_with_nocase?: Scalars['String'] | null
  token1_?: Token_filter | null
  tickLower?: Scalars['String'] | null
  tickLower_not?: Scalars['String'] | null
  tickLower_gt?: Scalars['String'] | null
  tickLower_lt?: Scalars['String'] | null
  tickLower_gte?: Scalars['String'] | null
  tickLower_lte?: Scalars['String'] | null
  tickLower_in?: Scalars['String'][] | null
  tickLower_not_in?: Scalars['String'][] | null
  tickLower_contains?: Scalars['String'] | null
  tickLower_contains_nocase?: Scalars['String'] | null
  tickLower_not_contains?: Scalars['String'] | null
  tickLower_not_contains_nocase?: Scalars['String'] | null
  tickLower_starts_with?: Scalars['String'] | null
  tickLower_starts_with_nocase?: Scalars['String'] | null
  tickLower_not_starts_with?: Scalars['String'] | null
  tickLower_not_starts_with_nocase?: Scalars['String'] | null
  tickLower_ends_with?: Scalars['String'] | null
  tickLower_ends_with_nocase?: Scalars['String'] | null
  tickLower_not_ends_with?: Scalars['String'] | null
  tickLower_not_ends_with_nocase?: Scalars['String'] | null
  tickLower_?: Tick_filter | null
  tickUpper?: Scalars['String'] | null
  tickUpper_not?: Scalars['String'] | null
  tickUpper_gt?: Scalars['String'] | null
  tickUpper_lt?: Scalars['String'] | null
  tickUpper_gte?: Scalars['String'] | null
  tickUpper_lte?: Scalars['String'] | null
  tickUpper_in?: Scalars['String'][] | null
  tickUpper_not_in?: Scalars['String'][] | null
  tickUpper_contains?: Scalars['String'] | null
  tickUpper_contains_nocase?: Scalars['String'] | null
  tickUpper_not_contains?: Scalars['String'] | null
  tickUpper_not_contains_nocase?: Scalars['String'] | null
  tickUpper_starts_with?: Scalars['String'] | null
  tickUpper_starts_with_nocase?: Scalars['String'] | null
  tickUpper_not_starts_with?: Scalars['String'] | null
  tickUpper_not_starts_with_nocase?: Scalars['String'] | null
  tickUpper_ends_with?: Scalars['String'] | null
  tickUpper_ends_with_nocase?: Scalars['String'] | null
  tickUpper_not_ends_with?: Scalars['String'] | null
  tickUpper_not_ends_with_nocase?: Scalars['String'] | null
  tickUpper_?: Tick_filter | null
  liquidity?: Scalars['BigInt'] | null
  liquidity_not?: Scalars['BigInt'] | null
  liquidity_gt?: Scalars['BigInt'] | null
  liquidity_lt?: Scalars['BigInt'] | null
  liquidity_gte?: Scalars['BigInt'] | null
  liquidity_lte?: Scalars['BigInt'] | null
  liquidity_in?: Scalars['BigInt'][] | null
  liquidity_not_in?: Scalars['BigInt'][] | null
  depositedToken0?: Scalars['BigDecimal'] | null
  depositedToken0_not?: Scalars['BigDecimal'] | null
  depositedToken0_gt?: Scalars['BigDecimal'] | null
  depositedToken0_lt?: Scalars['BigDecimal'] | null
  depositedToken0_gte?: Scalars['BigDecimal'] | null
  depositedToken0_lte?: Scalars['BigDecimal'] | null
  depositedToken0_in?: Scalars['BigDecimal'][] | null
  depositedToken0_not_in?: Scalars['BigDecimal'][] | null
  depositedToken1?: Scalars['BigDecimal'] | null
  depositedToken1_not?: Scalars['BigDecimal'] | null
  depositedToken1_gt?: Scalars['BigDecimal'] | null
  depositedToken1_lt?: Scalars['BigDecimal'] | null
  depositedToken1_gte?: Scalars['BigDecimal'] | null
  depositedToken1_lte?: Scalars['BigDecimal'] | null
  depositedToken1_in?: Scalars['BigDecimal'][] | null
  depositedToken1_not_in?: Scalars['BigDecimal'][] | null
  withdrawnToken0?: Scalars['BigDecimal'] | null
  withdrawnToken0_not?: Scalars['BigDecimal'] | null
  withdrawnToken0_gt?: Scalars['BigDecimal'] | null
  withdrawnToken0_lt?: Scalars['BigDecimal'] | null
  withdrawnToken0_gte?: Scalars['BigDecimal'] | null
  withdrawnToken0_lte?: Scalars['BigDecimal'] | null
  withdrawnToken0_in?: Scalars['BigDecimal'][] | null
  withdrawnToken0_not_in?: Scalars['BigDecimal'][] | null
  withdrawnToken1?: Scalars['BigDecimal'] | null
  withdrawnToken1_not?: Scalars['BigDecimal'] | null
  withdrawnToken1_gt?: Scalars['BigDecimal'] | null
  withdrawnToken1_lt?: Scalars['BigDecimal'] | null
  withdrawnToken1_gte?: Scalars['BigDecimal'] | null
  withdrawnToken1_lte?: Scalars['BigDecimal'] | null
  withdrawnToken1_in?: Scalars['BigDecimal'][] | null
  withdrawnToken1_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0?: Scalars['BigDecimal'] | null
  collectedFeesToken0_not?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1?: Scalars['BigDecimal'] | null
  collectedFeesToken1_not?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1_not_in?: Scalars['BigDecimal'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  feeGrowthInside0LastX128?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_not?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_gt?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_lt?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_gte?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_lte?: Scalars['BigInt'] | null
  feeGrowthInside0LastX128_in?: Scalars['BigInt'][] | null
  feeGrowthInside0LastX128_not_in?: Scalars['BigInt'][] | null
  feeGrowthInside1LastX128?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_not?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_gt?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_lt?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_gte?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_lte?: Scalars['BigInt'] | null
  feeGrowthInside1LastX128_in?: Scalars['BigInt'][] | null
  feeGrowthInside1LastX128_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Position_filter | null)[] | null
  or?: (Position_filter | null)[] | null
}

export interface QueryGenqlSelection {
  factory?: FactoryGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  factories?: FactoryGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Factory_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Factory_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  bundle?: BundleGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  bundles?: BundleGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Bundle_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Bundle_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  token?: TokenGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokens?: TokenGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Token_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Token_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  pool?: PoolGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  pools?: PoolGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Pool_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Pool_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tick?: TickGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  ticks?: TickGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Tick_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Tick_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  position?: PositionGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  positions?: PositionGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Position_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Position_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  positionSnapshot?: PositionSnapshotGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  positionSnapshots?: PositionSnapshotGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PositionSnapshot_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PositionSnapshot_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  transaction?: TransactionGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  transactions?: TransactionGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Transaction_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Transaction_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  mint?: MintGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  mints?: MintGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Mint_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Mint_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  burn?: BurnGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  burns?: BurnGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Burn_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Burn_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  swap?: SwapGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  swaps?: SwapGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Swap_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Swap_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  collect?: CollectGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  collects?: CollectGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Collect_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Collect_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  flash?: FlashGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  flashes?: FlashGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Flash_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Flash_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  uniswapDayData?: UniswapDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  uniswapDayDatas?: UniswapDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: UniswapDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: UniswapDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolDayData?: PoolDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolDayDatas?: PoolDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PoolDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PoolDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolHourData?: PoolHourDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolHourDatas?: PoolHourDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PoolHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PoolHourData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickHourData?: TickHourDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickHourDatas?: TickHourDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TickHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TickHourData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickDayData?: TickDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickDayDatas?: TickDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TickDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TickDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenDayData?: TokenDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenDayDatas?: TokenDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TokenDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TokenDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenHourData?: TokenHourDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenHourDatas?: TokenHourDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TokenHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TokenHourData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  /** Access to subgraph metadata */
  _meta?: _Meta_GenqlSelection & { __args?: { block?: Block_height | null } }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface SubscriptionGenqlSelection {
  factory?: FactoryGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  factories?: FactoryGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Factory_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Factory_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  bundle?: BundleGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  bundles?: BundleGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Bundle_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Bundle_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  token?: TokenGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokens?: TokenGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Token_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Token_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  pool?: PoolGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  pools?: PoolGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Pool_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Pool_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tick?: TickGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  ticks?: TickGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Tick_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Tick_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  position?: PositionGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  positions?: PositionGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Position_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Position_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  positionSnapshot?: PositionSnapshotGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  positionSnapshots?: PositionSnapshotGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PositionSnapshot_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PositionSnapshot_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  transaction?: TransactionGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  transactions?: TransactionGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Transaction_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Transaction_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  mint?: MintGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  mints?: MintGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Mint_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Mint_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  burn?: BurnGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  burns?: BurnGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Burn_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Burn_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  swap?: SwapGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  swaps?: SwapGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Swap_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Swap_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  collect?: CollectGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  collects?: CollectGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Collect_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Collect_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  flash?: FlashGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  flashes?: FlashGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Flash_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Flash_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  uniswapDayData?: UniswapDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  uniswapDayDatas?: UniswapDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: UniswapDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: UniswapDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolDayData?: PoolDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolDayDatas?: PoolDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PoolDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PoolDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolHourData?: PoolHourDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  poolHourDatas?: PoolHourDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: PoolHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: PoolHourData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickHourData?: TickHourDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickHourDatas?: TickHourDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TickHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TickHourData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickDayData?: TickDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tickDayDatas?: TickDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TickDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TickDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenDayData?: TokenDayDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenDayDatas?: TokenDayDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TokenDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TokenDayData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenHourData?: TokenHourDataGenqlSelection & {
    __args: {
      id: Scalars['ID']
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  tokenHourDatas?: TokenHourDataGenqlSelection & {
    __args: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TokenHourData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TokenHourData_filter | null
      /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
      block?: Block_height | null
      /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
      subgraphError: _SubgraphErrorPolicy_
    }
  }
  /** Access to subgraph metadata */
  _meta?: _Meta_GenqlSelection & { __args?: { block?: Block_height | null } }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface SwapGenqlSelection {
  id?: boolean | number
  transaction?: TransactionGenqlSelection
  timestamp?: boolean | number
  pool?: PoolGenqlSelection
  token0?: TokenGenqlSelection
  token1?: TokenGenqlSelection
  sender?: boolean | number
  recipient?: boolean | number
  origin?: boolean | number
  amount0?: boolean | number
  amount1?: boolean | number
  amountUSD?: boolean | number
  sqrtPriceX96?: boolean | number
  tick?: boolean | number
  logIndex?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Swap_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  transaction?: Scalars['String'] | null
  transaction_not?: Scalars['String'] | null
  transaction_gt?: Scalars['String'] | null
  transaction_lt?: Scalars['String'] | null
  transaction_gte?: Scalars['String'] | null
  transaction_lte?: Scalars['String'] | null
  transaction_in?: Scalars['String'][] | null
  transaction_not_in?: Scalars['String'][] | null
  transaction_contains?: Scalars['String'] | null
  transaction_contains_nocase?: Scalars['String'] | null
  transaction_not_contains?: Scalars['String'] | null
  transaction_not_contains_nocase?: Scalars['String'] | null
  transaction_starts_with?: Scalars['String'] | null
  transaction_starts_with_nocase?: Scalars['String'] | null
  transaction_not_starts_with?: Scalars['String'] | null
  transaction_not_starts_with_nocase?: Scalars['String'] | null
  transaction_ends_with?: Scalars['String'] | null
  transaction_ends_with_nocase?: Scalars['String'] | null
  transaction_not_ends_with?: Scalars['String'] | null
  transaction_not_ends_with_nocase?: Scalars['String'] | null
  transaction_?: Transaction_filter | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  token0?: Scalars['String'] | null
  token0_not?: Scalars['String'] | null
  token0_gt?: Scalars['String'] | null
  token0_lt?: Scalars['String'] | null
  token0_gte?: Scalars['String'] | null
  token0_lte?: Scalars['String'] | null
  token0_in?: Scalars['String'][] | null
  token0_not_in?: Scalars['String'][] | null
  token0_contains?: Scalars['String'] | null
  token0_contains_nocase?: Scalars['String'] | null
  token0_not_contains?: Scalars['String'] | null
  token0_not_contains_nocase?: Scalars['String'] | null
  token0_starts_with?: Scalars['String'] | null
  token0_starts_with_nocase?: Scalars['String'] | null
  token0_not_starts_with?: Scalars['String'] | null
  token0_not_starts_with_nocase?: Scalars['String'] | null
  token0_ends_with?: Scalars['String'] | null
  token0_ends_with_nocase?: Scalars['String'] | null
  token0_not_ends_with?: Scalars['String'] | null
  token0_not_ends_with_nocase?: Scalars['String'] | null
  token0_?: Token_filter | null
  token1?: Scalars['String'] | null
  token1_not?: Scalars['String'] | null
  token1_gt?: Scalars['String'] | null
  token1_lt?: Scalars['String'] | null
  token1_gte?: Scalars['String'] | null
  token1_lte?: Scalars['String'] | null
  token1_in?: Scalars['String'][] | null
  token1_not_in?: Scalars['String'][] | null
  token1_contains?: Scalars['String'] | null
  token1_contains_nocase?: Scalars['String'] | null
  token1_not_contains?: Scalars['String'] | null
  token1_not_contains_nocase?: Scalars['String'] | null
  token1_starts_with?: Scalars['String'] | null
  token1_starts_with_nocase?: Scalars['String'] | null
  token1_not_starts_with?: Scalars['String'] | null
  token1_not_starts_with_nocase?: Scalars['String'] | null
  token1_ends_with?: Scalars['String'] | null
  token1_ends_with_nocase?: Scalars['String'] | null
  token1_not_ends_with?: Scalars['String'] | null
  token1_not_ends_with_nocase?: Scalars['String'] | null
  token1_?: Token_filter | null
  sender?: Scalars['Bytes'] | null
  sender_not?: Scalars['Bytes'] | null
  sender_gt?: Scalars['Bytes'] | null
  sender_lt?: Scalars['Bytes'] | null
  sender_gte?: Scalars['Bytes'] | null
  sender_lte?: Scalars['Bytes'] | null
  sender_in?: Scalars['Bytes'][] | null
  sender_not_in?: Scalars['Bytes'][] | null
  sender_contains?: Scalars['Bytes'] | null
  sender_not_contains?: Scalars['Bytes'] | null
  recipient?: Scalars['Bytes'] | null
  recipient_not?: Scalars['Bytes'] | null
  recipient_gt?: Scalars['Bytes'] | null
  recipient_lt?: Scalars['Bytes'] | null
  recipient_gte?: Scalars['Bytes'] | null
  recipient_lte?: Scalars['Bytes'] | null
  recipient_in?: Scalars['Bytes'][] | null
  recipient_not_in?: Scalars['Bytes'][] | null
  recipient_contains?: Scalars['Bytes'] | null
  recipient_not_contains?: Scalars['Bytes'] | null
  origin?: Scalars['Bytes'] | null
  origin_not?: Scalars['Bytes'] | null
  origin_gt?: Scalars['Bytes'] | null
  origin_lt?: Scalars['Bytes'] | null
  origin_gte?: Scalars['Bytes'] | null
  origin_lte?: Scalars['Bytes'] | null
  origin_in?: Scalars['Bytes'][] | null
  origin_not_in?: Scalars['Bytes'][] | null
  origin_contains?: Scalars['Bytes'] | null
  origin_not_contains?: Scalars['Bytes'] | null
  amount0?: Scalars['BigDecimal'] | null
  amount0_not?: Scalars['BigDecimal'] | null
  amount0_gt?: Scalars['BigDecimal'] | null
  amount0_lt?: Scalars['BigDecimal'] | null
  amount0_gte?: Scalars['BigDecimal'] | null
  amount0_lte?: Scalars['BigDecimal'] | null
  amount0_in?: Scalars['BigDecimal'][] | null
  amount0_not_in?: Scalars['BigDecimal'][] | null
  amount1?: Scalars['BigDecimal'] | null
  amount1_not?: Scalars['BigDecimal'] | null
  amount1_gt?: Scalars['BigDecimal'] | null
  amount1_lt?: Scalars['BigDecimal'] | null
  amount1_gte?: Scalars['BigDecimal'] | null
  amount1_lte?: Scalars['BigDecimal'] | null
  amount1_in?: Scalars['BigDecimal'][] | null
  amount1_not_in?: Scalars['BigDecimal'][] | null
  amountUSD?: Scalars['BigDecimal'] | null
  amountUSD_not?: Scalars['BigDecimal'] | null
  amountUSD_gt?: Scalars['BigDecimal'] | null
  amountUSD_lt?: Scalars['BigDecimal'] | null
  amountUSD_gte?: Scalars['BigDecimal'] | null
  amountUSD_lte?: Scalars['BigDecimal'] | null
  amountUSD_in?: Scalars['BigDecimal'][] | null
  amountUSD_not_in?: Scalars['BigDecimal'][] | null
  sqrtPriceX96?: Scalars['BigInt'] | null
  sqrtPriceX96_not?: Scalars['BigInt'] | null
  sqrtPriceX96_gt?: Scalars['BigInt'] | null
  sqrtPriceX96_lt?: Scalars['BigInt'] | null
  sqrtPriceX96_gte?: Scalars['BigInt'] | null
  sqrtPriceX96_lte?: Scalars['BigInt'] | null
  sqrtPriceX96_in?: Scalars['BigInt'][] | null
  sqrtPriceX96_not_in?: Scalars['BigInt'][] | null
  tick?: Scalars['BigInt'] | null
  tick_not?: Scalars['BigInt'] | null
  tick_gt?: Scalars['BigInt'] | null
  tick_lt?: Scalars['BigInt'] | null
  tick_gte?: Scalars['BigInt'] | null
  tick_lte?: Scalars['BigInt'] | null
  tick_in?: Scalars['BigInt'][] | null
  tick_not_in?: Scalars['BigInt'][] | null
  logIndex?: Scalars['BigInt'] | null
  logIndex_not?: Scalars['BigInt'] | null
  logIndex_gt?: Scalars['BigInt'] | null
  logIndex_lt?: Scalars['BigInt'] | null
  logIndex_gte?: Scalars['BigInt'] | null
  logIndex_lte?: Scalars['BigInt'] | null
  logIndex_in?: Scalars['BigInt'][] | null
  logIndex_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Swap_filter | null)[] | null
  or?: (Swap_filter | null)[] | null
}

export interface TickGenqlSelection {
  id?: boolean | number
  poolAddress?: boolean | number
  tickIdx?: boolean | number
  pool?: PoolGenqlSelection
  liquidityGross?: boolean | number
  liquidityNet?: boolean | number
  price0?: boolean | number
  price1?: boolean | number
  volumeToken0?: boolean | number
  volumeToken1?: boolean | number
  volumeUSD?: boolean | number
  untrackedVolumeUSD?: boolean | number
  feesUSD?: boolean | number
  collectedFeesToken0?: boolean | number
  collectedFeesToken1?: boolean | number
  collectedFeesUSD?: boolean | number
  createdAtTimestamp?: boolean | number
  createdAtBlockNumber?: boolean | number
  liquidityProviderCount?: boolean | number
  feeGrowthOutside0X128?: boolean | number
  feeGrowthOutside1X128?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TickDayDataGenqlSelection {
  id?: boolean | number
  date?: boolean | number
  pool?: PoolGenqlSelection
  tick?: TickGenqlSelection
  liquidityGross?: boolean | number
  liquidityNet?: boolean | number
  volumeToken0?: boolean | number
  volumeToken1?: boolean | number
  volumeUSD?: boolean | number
  feesUSD?: boolean | number
  feeGrowthOutside0X128?: boolean | number
  feeGrowthOutside1X128?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TickDayData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  date?: Scalars['Int'] | null
  date_not?: Scalars['Int'] | null
  date_gt?: Scalars['Int'] | null
  date_lt?: Scalars['Int'] | null
  date_gte?: Scalars['Int'] | null
  date_lte?: Scalars['Int'] | null
  date_in?: Scalars['Int'][] | null
  date_not_in?: Scalars['Int'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  tick?: Scalars['String'] | null
  tick_not?: Scalars['String'] | null
  tick_gt?: Scalars['String'] | null
  tick_lt?: Scalars['String'] | null
  tick_gte?: Scalars['String'] | null
  tick_lte?: Scalars['String'] | null
  tick_in?: Scalars['String'][] | null
  tick_not_in?: Scalars['String'][] | null
  tick_contains?: Scalars['String'] | null
  tick_contains_nocase?: Scalars['String'] | null
  tick_not_contains?: Scalars['String'] | null
  tick_not_contains_nocase?: Scalars['String'] | null
  tick_starts_with?: Scalars['String'] | null
  tick_starts_with_nocase?: Scalars['String'] | null
  tick_not_starts_with?: Scalars['String'] | null
  tick_not_starts_with_nocase?: Scalars['String'] | null
  tick_ends_with?: Scalars['String'] | null
  tick_ends_with_nocase?: Scalars['String'] | null
  tick_not_ends_with?: Scalars['String'] | null
  tick_not_ends_with_nocase?: Scalars['String'] | null
  tick_?: Tick_filter | null
  liquidityGross?: Scalars['BigInt'] | null
  liquidityGross_not?: Scalars['BigInt'] | null
  liquidityGross_gt?: Scalars['BigInt'] | null
  liquidityGross_lt?: Scalars['BigInt'] | null
  liquidityGross_gte?: Scalars['BigInt'] | null
  liquidityGross_lte?: Scalars['BigInt'] | null
  liquidityGross_in?: Scalars['BigInt'][] | null
  liquidityGross_not_in?: Scalars['BigInt'][] | null
  liquidityNet?: Scalars['BigInt'] | null
  liquidityNet_not?: Scalars['BigInt'] | null
  liquidityNet_gt?: Scalars['BigInt'] | null
  liquidityNet_lt?: Scalars['BigInt'] | null
  liquidityNet_gte?: Scalars['BigInt'] | null
  liquidityNet_lte?: Scalars['BigInt'] | null
  liquidityNet_in?: Scalars['BigInt'][] | null
  liquidityNet_not_in?: Scalars['BigInt'][] | null
  volumeToken0?: Scalars['BigDecimal'] | null
  volumeToken0_not?: Scalars['BigDecimal'] | null
  volumeToken0_gt?: Scalars['BigDecimal'] | null
  volumeToken0_lt?: Scalars['BigDecimal'] | null
  volumeToken0_gte?: Scalars['BigDecimal'] | null
  volumeToken0_lte?: Scalars['BigDecimal'] | null
  volumeToken0_in?: Scalars['BigDecimal'][] | null
  volumeToken0_not_in?: Scalars['BigDecimal'][] | null
  volumeToken1?: Scalars['BigDecimal'] | null
  volumeToken1_not?: Scalars['BigDecimal'] | null
  volumeToken1_gt?: Scalars['BigDecimal'] | null
  volumeToken1_lt?: Scalars['BigDecimal'] | null
  volumeToken1_gte?: Scalars['BigDecimal'] | null
  volumeToken1_lte?: Scalars['BigDecimal'] | null
  volumeToken1_in?: Scalars['BigDecimal'][] | null
  volumeToken1_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  feeGrowthOutside0X128?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_not?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_gt?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_lt?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_gte?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_lte?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_in?: Scalars['BigInt'][] | null
  feeGrowthOutside0X128_not_in?: Scalars['BigInt'][] | null
  feeGrowthOutside1X128?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_not?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_gt?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_lt?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_gte?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_lte?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_in?: Scalars['BigInt'][] | null
  feeGrowthOutside1X128_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (TickDayData_filter | null)[] | null
  or?: (TickDayData_filter | null)[] | null
}

export interface TickHourDataGenqlSelection {
  id?: boolean | number
  periodStartUnix?: boolean | number
  pool?: PoolGenqlSelection
  tick?: TickGenqlSelection
  liquidityGross?: boolean | number
  liquidityNet?: boolean | number
  volumeToken0?: boolean | number
  volumeToken1?: boolean | number
  volumeUSD?: boolean | number
  feesUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TickHourData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  periodStartUnix?: Scalars['Int'] | null
  periodStartUnix_not?: Scalars['Int'] | null
  periodStartUnix_gt?: Scalars['Int'] | null
  periodStartUnix_lt?: Scalars['Int'] | null
  periodStartUnix_gte?: Scalars['Int'] | null
  periodStartUnix_lte?: Scalars['Int'] | null
  periodStartUnix_in?: Scalars['Int'][] | null
  periodStartUnix_not_in?: Scalars['Int'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  tick?: Scalars['String'] | null
  tick_not?: Scalars['String'] | null
  tick_gt?: Scalars['String'] | null
  tick_lt?: Scalars['String'] | null
  tick_gte?: Scalars['String'] | null
  tick_lte?: Scalars['String'] | null
  tick_in?: Scalars['String'][] | null
  tick_not_in?: Scalars['String'][] | null
  tick_contains?: Scalars['String'] | null
  tick_contains_nocase?: Scalars['String'] | null
  tick_not_contains?: Scalars['String'] | null
  tick_not_contains_nocase?: Scalars['String'] | null
  tick_starts_with?: Scalars['String'] | null
  tick_starts_with_nocase?: Scalars['String'] | null
  tick_not_starts_with?: Scalars['String'] | null
  tick_not_starts_with_nocase?: Scalars['String'] | null
  tick_ends_with?: Scalars['String'] | null
  tick_ends_with_nocase?: Scalars['String'] | null
  tick_not_ends_with?: Scalars['String'] | null
  tick_not_ends_with_nocase?: Scalars['String'] | null
  tick_?: Tick_filter | null
  liquidityGross?: Scalars['BigInt'] | null
  liquidityGross_not?: Scalars['BigInt'] | null
  liquidityGross_gt?: Scalars['BigInt'] | null
  liquidityGross_lt?: Scalars['BigInt'] | null
  liquidityGross_gte?: Scalars['BigInt'] | null
  liquidityGross_lte?: Scalars['BigInt'] | null
  liquidityGross_in?: Scalars['BigInt'][] | null
  liquidityGross_not_in?: Scalars['BigInt'][] | null
  liquidityNet?: Scalars['BigInt'] | null
  liquidityNet_not?: Scalars['BigInt'] | null
  liquidityNet_gt?: Scalars['BigInt'] | null
  liquidityNet_lt?: Scalars['BigInt'] | null
  liquidityNet_gte?: Scalars['BigInt'] | null
  liquidityNet_lte?: Scalars['BigInt'] | null
  liquidityNet_in?: Scalars['BigInt'][] | null
  liquidityNet_not_in?: Scalars['BigInt'][] | null
  volumeToken0?: Scalars['BigDecimal'] | null
  volumeToken0_not?: Scalars['BigDecimal'] | null
  volumeToken0_gt?: Scalars['BigDecimal'] | null
  volumeToken0_lt?: Scalars['BigDecimal'] | null
  volumeToken0_gte?: Scalars['BigDecimal'] | null
  volumeToken0_lte?: Scalars['BigDecimal'] | null
  volumeToken0_in?: Scalars['BigDecimal'][] | null
  volumeToken0_not_in?: Scalars['BigDecimal'][] | null
  volumeToken1?: Scalars['BigDecimal'] | null
  volumeToken1_not?: Scalars['BigDecimal'] | null
  volumeToken1_gt?: Scalars['BigDecimal'] | null
  volumeToken1_lt?: Scalars['BigDecimal'] | null
  volumeToken1_gte?: Scalars['BigDecimal'] | null
  volumeToken1_lte?: Scalars['BigDecimal'] | null
  volumeToken1_in?: Scalars['BigDecimal'][] | null
  volumeToken1_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (TickHourData_filter | null)[] | null
  or?: (TickHourData_filter | null)[] | null
}

export interface Tick_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  poolAddress?: Scalars['String'] | null
  poolAddress_not?: Scalars['String'] | null
  poolAddress_gt?: Scalars['String'] | null
  poolAddress_lt?: Scalars['String'] | null
  poolAddress_gte?: Scalars['String'] | null
  poolAddress_lte?: Scalars['String'] | null
  poolAddress_in?: Scalars['String'][] | null
  poolAddress_not_in?: Scalars['String'][] | null
  poolAddress_contains?: Scalars['String'] | null
  poolAddress_contains_nocase?: Scalars['String'] | null
  poolAddress_not_contains?: Scalars['String'] | null
  poolAddress_not_contains_nocase?: Scalars['String'] | null
  poolAddress_starts_with?: Scalars['String'] | null
  poolAddress_starts_with_nocase?: Scalars['String'] | null
  poolAddress_not_starts_with?: Scalars['String'] | null
  poolAddress_not_starts_with_nocase?: Scalars['String'] | null
  poolAddress_ends_with?: Scalars['String'] | null
  poolAddress_ends_with_nocase?: Scalars['String'] | null
  poolAddress_not_ends_with?: Scalars['String'] | null
  poolAddress_not_ends_with_nocase?: Scalars['String'] | null
  tickIdx?: Scalars['BigInt'] | null
  tickIdx_not?: Scalars['BigInt'] | null
  tickIdx_gt?: Scalars['BigInt'] | null
  tickIdx_lt?: Scalars['BigInt'] | null
  tickIdx_gte?: Scalars['BigInt'] | null
  tickIdx_lte?: Scalars['BigInt'] | null
  tickIdx_in?: Scalars['BigInt'][] | null
  tickIdx_not_in?: Scalars['BigInt'][] | null
  pool?: Scalars['String'] | null
  pool_not?: Scalars['String'] | null
  pool_gt?: Scalars['String'] | null
  pool_lt?: Scalars['String'] | null
  pool_gte?: Scalars['String'] | null
  pool_lte?: Scalars['String'] | null
  pool_in?: Scalars['String'][] | null
  pool_not_in?: Scalars['String'][] | null
  pool_contains?: Scalars['String'] | null
  pool_contains_nocase?: Scalars['String'] | null
  pool_not_contains?: Scalars['String'] | null
  pool_not_contains_nocase?: Scalars['String'] | null
  pool_starts_with?: Scalars['String'] | null
  pool_starts_with_nocase?: Scalars['String'] | null
  pool_not_starts_with?: Scalars['String'] | null
  pool_not_starts_with_nocase?: Scalars['String'] | null
  pool_ends_with?: Scalars['String'] | null
  pool_ends_with_nocase?: Scalars['String'] | null
  pool_not_ends_with?: Scalars['String'] | null
  pool_not_ends_with_nocase?: Scalars['String'] | null
  pool_?: Pool_filter | null
  liquidityGross?: Scalars['BigInt'] | null
  liquidityGross_not?: Scalars['BigInt'] | null
  liquidityGross_gt?: Scalars['BigInt'] | null
  liquidityGross_lt?: Scalars['BigInt'] | null
  liquidityGross_gte?: Scalars['BigInt'] | null
  liquidityGross_lte?: Scalars['BigInt'] | null
  liquidityGross_in?: Scalars['BigInt'][] | null
  liquidityGross_not_in?: Scalars['BigInt'][] | null
  liquidityNet?: Scalars['BigInt'] | null
  liquidityNet_not?: Scalars['BigInt'] | null
  liquidityNet_gt?: Scalars['BigInt'] | null
  liquidityNet_lt?: Scalars['BigInt'] | null
  liquidityNet_gte?: Scalars['BigInt'] | null
  liquidityNet_lte?: Scalars['BigInt'] | null
  liquidityNet_in?: Scalars['BigInt'][] | null
  liquidityNet_not_in?: Scalars['BigInt'][] | null
  price0?: Scalars['BigDecimal'] | null
  price0_not?: Scalars['BigDecimal'] | null
  price0_gt?: Scalars['BigDecimal'] | null
  price0_lt?: Scalars['BigDecimal'] | null
  price0_gte?: Scalars['BigDecimal'] | null
  price0_lte?: Scalars['BigDecimal'] | null
  price0_in?: Scalars['BigDecimal'][] | null
  price0_not_in?: Scalars['BigDecimal'][] | null
  price1?: Scalars['BigDecimal'] | null
  price1_not?: Scalars['BigDecimal'] | null
  price1_gt?: Scalars['BigDecimal'] | null
  price1_lt?: Scalars['BigDecimal'] | null
  price1_gte?: Scalars['BigDecimal'] | null
  price1_lte?: Scalars['BigDecimal'] | null
  price1_in?: Scalars['BigDecimal'][] | null
  price1_not_in?: Scalars['BigDecimal'][] | null
  volumeToken0?: Scalars['BigDecimal'] | null
  volumeToken0_not?: Scalars['BigDecimal'] | null
  volumeToken0_gt?: Scalars['BigDecimal'] | null
  volumeToken0_lt?: Scalars['BigDecimal'] | null
  volumeToken0_gte?: Scalars['BigDecimal'] | null
  volumeToken0_lte?: Scalars['BigDecimal'] | null
  volumeToken0_in?: Scalars['BigDecimal'][] | null
  volumeToken0_not_in?: Scalars['BigDecimal'][] | null
  volumeToken1?: Scalars['BigDecimal'] | null
  volumeToken1_not?: Scalars['BigDecimal'] | null
  volumeToken1_gt?: Scalars['BigDecimal'] | null
  volumeToken1_lt?: Scalars['BigDecimal'] | null
  volumeToken1_gte?: Scalars['BigDecimal'] | null
  volumeToken1_lte?: Scalars['BigDecimal'] | null
  volumeToken1_in?: Scalars['BigDecimal'][] | null
  volumeToken1_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_not?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0?: Scalars['BigDecimal'] | null
  collectedFeesToken0_not?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken0_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken0_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken0_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1?: Scalars['BigDecimal'] | null
  collectedFeesToken1_not?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lt?: Scalars['BigDecimal'] | null
  collectedFeesToken1_gte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_lte?: Scalars['BigDecimal'] | null
  collectedFeesToken1_in?: Scalars['BigDecimal'][] | null
  collectedFeesToken1_not_in?: Scalars['BigDecimal'][] | null
  collectedFeesUSD?: Scalars['BigDecimal'] | null
  collectedFeesUSD_not?: Scalars['BigDecimal'] | null
  collectedFeesUSD_gt?: Scalars['BigDecimal'] | null
  collectedFeesUSD_lt?: Scalars['BigDecimal'] | null
  collectedFeesUSD_gte?: Scalars['BigDecimal'] | null
  collectedFeesUSD_lte?: Scalars['BigDecimal'] | null
  collectedFeesUSD_in?: Scalars['BigDecimal'][] | null
  collectedFeesUSD_not_in?: Scalars['BigDecimal'][] | null
  createdAtTimestamp?: Scalars['BigInt'] | null
  createdAtTimestamp_not?: Scalars['BigInt'] | null
  createdAtTimestamp_gt?: Scalars['BigInt'] | null
  createdAtTimestamp_lt?: Scalars['BigInt'] | null
  createdAtTimestamp_gte?: Scalars['BigInt'] | null
  createdAtTimestamp_lte?: Scalars['BigInt'] | null
  createdAtTimestamp_in?: Scalars['BigInt'][] | null
  createdAtTimestamp_not_in?: Scalars['BigInt'][] | null
  createdAtBlockNumber?: Scalars['BigInt'] | null
  createdAtBlockNumber_not?: Scalars['BigInt'] | null
  createdAtBlockNumber_gt?: Scalars['BigInt'] | null
  createdAtBlockNumber_lt?: Scalars['BigInt'] | null
  createdAtBlockNumber_gte?: Scalars['BigInt'] | null
  createdAtBlockNumber_lte?: Scalars['BigInt'] | null
  createdAtBlockNumber_in?: Scalars['BigInt'][] | null
  createdAtBlockNumber_not_in?: Scalars['BigInt'][] | null
  liquidityProviderCount?: Scalars['BigInt'] | null
  liquidityProviderCount_not?: Scalars['BigInt'] | null
  liquidityProviderCount_gt?: Scalars['BigInt'] | null
  liquidityProviderCount_lt?: Scalars['BigInt'] | null
  liquidityProviderCount_gte?: Scalars['BigInt'] | null
  liquidityProviderCount_lte?: Scalars['BigInt'] | null
  liquidityProviderCount_in?: Scalars['BigInt'][] | null
  liquidityProviderCount_not_in?: Scalars['BigInt'][] | null
  feeGrowthOutside0X128?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_not?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_gt?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_lt?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_gte?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_lte?: Scalars['BigInt'] | null
  feeGrowthOutside0X128_in?: Scalars['BigInt'][] | null
  feeGrowthOutside0X128_not_in?: Scalars['BigInt'][] | null
  feeGrowthOutside1X128?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_not?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_gt?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_lt?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_gte?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_lte?: Scalars['BigInt'] | null
  feeGrowthOutside1X128_in?: Scalars['BigInt'][] | null
  feeGrowthOutside1X128_not_in?: Scalars['BigInt'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Tick_filter | null)[] | null
  or?: (Tick_filter | null)[] | null
}

export interface TokenGenqlSelection {
  id?: boolean | number
  symbol?: boolean | number
  name?: boolean | number
  decimals?: boolean | number
  totalSupply?: boolean | number
  volume?: boolean | number
  volumeUSD?: boolean | number
  untrackedVolumeUSD?: boolean | number
  feesUSD?: boolean | number
  txCount?: boolean | number
  poolCount?: boolean | number
  totalValueLocked?: boolean | number
  totalValueLockedUSD?: boolean | number
  totalValueLockedUSDUntracked?: boolean | number
  derivedETH?: boolean | number
  whitelistPools?: PoolGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Pool_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Pool_filter | null
    }
  }
  tokenDayData?: TokenDayDataGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: TokenDayData_orderBy | null
      orderDirection?: OrderDirection | null
      where?: TokenDayData_filter | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TokenDayDataGenqlSelection {
  id?: boolean | number
  date?: boolean | number
  token?: TokenGenqlSelection
  volume?: boolean | number
  volumeUSD?: boolean | number
  untrackedVolumeUSD?: boolean | number
  totalValueLocked?: boolean | number
  totalValueLockedUSD?: boolean | number
  priceUSD?: boolean | number
  feesUSD?: boolean | number
  open?: boolean | number
  high?: boolean | number
  low?: boolean | number
  close?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TokenDayData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  date?: Scalars['Int'] | null
  date_not?: Scalars['Int'] | null
  date_gt?: Scalars['Int'] | null
  date_lt?: Scalars['Int'] | null
  date_gte?: Scalars['Int'] | null
  date_lte?: Scalars['Int'] | null
  date_in?: Scalars['Int'][] | null
  date_not_in?: Scalars['Int'][] | null
  token?: Scalars['String'] | null
  token_not?: Scalars['String'] | null
  token_gt?: Scalars['String'] | null
  token_lt?: Scalars['String'] | null
  token_gte?: Scalars['String'] | null
  token_lte?: Scalars['String'] | null
  token_in?: Scalars['String'][] | null
  token_not_in?: Scalars['String'][] | null
  token_contains?: Scalars['String'] | null
  token_contains_nocase?: Scalars['String'] | null
  token_not_contains?: Scalars['String'] | null
  token_not_contains_nocase?: Scalars['String'] | null
  token_starts_with?: Scalars['String'] | null
  token_starts_with_nocase?: Scalars['String'] | null
  token_not_starts_with?: Scalars['String'] | null
  token_not_starts_with_nocase?: Scalars['String'] | null
  token_ends_with?: Scalars['String'] | null
  token_ends_with_nocase?: Scalars['String'] | null
  token_not_ends_with?: Scalars['String'] | null
  token_not_ends_with_nocase?: Scalars['String'] | null
  token_?: Token_filter | null
  volume?: Scalars['BigDecimal'] | null
  volume_not?: Scalars['BigDecimal'] | null
  volume_gt?: Scalars['BigDecimal'] | null
  volume_lt?: Scalars['BigDecimal'] | null
  volume_gte?: Scalars['BigDecimal'] | null
  volume_lte?: Scalars['BigDecimal'] | null
  volume_in?: Scalars['BigDecimal'][] | null
  volume_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_not?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLocked?: Scalars['BigDecimal'] | null
  totalValueLocked_not?: Scalars['BigDecimal'] | null
  totalValueLocked_gt?: Scalars['BigDecimal'] | null
  totalValueLocked_lt?: Scalars['BigDecimal'] | null
  totalValueLocked_gte?: Scalars['BigDecimal'] | null
  totalValueLocked_lte?: Scalars['BigDecimal'] | null
  totalValueLocked_in?: Scalars['BigDecimal'][] | null
  totalValueLocked_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD_not_in?: Scalars['BigDecimal'][] | null
  priceUSD?: Scalars['BigDecimal'] | null
  priceUSD_not?: Scalars['BigDecimal'] | null
  priceUSD_gt?: Scalars['BigDecimal'] | null
  priceUSD_lt?: Scalars['BigDecimal'] | null
  priceUSD_gte?: Scalars['BigDecimal'] | null
  priceUSD_lte?: Scalars['BigDecimal'] | null
  priceUSD_in?: Scalars['BigDecimal'][] | null
  priceUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  open?: Scalars['BigDecimal'] | null
  open_not?: Scalars['BigDecimal'] | null
  open_gt?: Scalars['BigDecimal'] | null
  open_lt?: Scalars['BigDecimal'] | null
  open_gte?: Scalars['BigDecimal'] | null
  open_lte?: Scalars['BigDecimal'] | null
  open_in?: Scalars['BigDecimal'][] | null
  open_not_in?: Scalars['BigDecimal'][] | null
  high?: Scalars['BigDecimal'] | null
  high_not?: Scalars['BigDecimal'] | null
  high_gt?: Scalars['BigDecimal'] | null
  high_lt?: Scalars['BigDecimal'] | null
  high_gte?: Scalars['BigDecimal'] | null
  high_lte?: Scalars['BigDecimal'] | null
  high_in?: Scalars['BigDecimal'][] | null
  high_not_in?: Scalars['BigDecimal'][] | null
  low?: Scalars['BigDecimal'] | null
  low_not?: Scalars['BigDecimal'] | null
  low_gt?: Scalars['BigDecimal'] | null
  low_lt?: Scalars['BigDecimal'] | null
  low_gte?: Scalars['BigDecimal'] | null
  low_lte?: Scalars['BigDecimal'] | null
  low_in?: Scalars['BigDecimal'][] | null
  low_not_in?: Scalars['BigDecimal'][] | null
  close?: Scalars['BigDecimal'] | null
  close_not?: Scalars['BigDecimal'] | null
  close_gt?: Scalars['BigDecimal'] | null
  close_lt?: Scalars['BigDecimal'] | null
  close_gte?: Scalars['BigDecimal'] | null
  close_lte?: Scalars['BigDecimal'] | null
  close_in?: Scalars['BigDecimal'][] | null
  close_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (TokenDayData_filter | null)[] | null
  or?: (TokenDayData_filter | null)[] | null
}

export interface TokenHourDataGenqlSelection {
  id?: boolean | number
  periodStartUnix?: boolean | number
  token?: TokenGenqlSelection
  volume?: boolean | number
  volumeUSD?: boolean | number
  untrackedVolumeUSD?: boolean | number
  totalValueLocked?: boolean | number
  totalValueLockedUSD?: boolean | number
  priceUSD?: boolean | number
  feesUSD?: boolean | number
  open?: boolean | number
  high?: boolean | number
  low?: boolean | number
  close?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TokenHourData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  periodStartUnix?: Scalars['Int'] | null
  periodStartUnix_not?: Scalars['Int'] | null
  periodStartUnix_gt?: Scalars['Int'] | null
  periodStartUnix_lt?: Scalars['Int'] | null
  periodStartUnix_gte?: Scalars['Int'] | null
  periodStartUnix_lte?: Scalars['Int'] | null
  periodStartUnix_in?: Scalars['Int'][] | null
  periodStartUnix_not_in?: Scalars['Int'][] | null
  token?: Scalars['String'] | null
  token_not?: Scalars['String'] | null
  token_gt?: Scalars['String'] | null
  token_lt?: Scalars['String'] | null
  token_gte?: Scalars['String'] | null
  token_lte?: Scalars['String'] | null
  token_in?: Scalars['String'][] | null
  token_not_in?: Scalars['String'][] | null
  token_contains?: Scalars['String'] | null
  token_contains_nocase?: Scalars['String'] | null
  token_not_contains?: Scalars['String'] | null
  token_not_contains_nocase?: Scalars['String'] | null
  token_starts_with?: Scalars['String'] | null
  token_starts_with_nocase?: Scalars['String'] | null
  token_not_starts_with?: Scalars['String'] | null
  token_not_starts_with_nocase?: Scalars['String'] | null
  token_ends_with?: Scalars['String'] | null
  token_ends_with_nocase?: Scalars['String'] | null
  token_not_ends_with?: Scalars['String'] | null
  token_not_ends_with_nocase?: Scalars['String'] | null
  token_?: Token_filter | null
  volume?: Scalars['BigDecimal'] | null
  volume_not?: Scalars['BigDecimal'] | null
  volume_gt?: Scalars['BigDecimal'] | null
  volume_lt?: Scalars['BigDecimal'] | null
  volume_gte?: Scalars['BigDecimal'] | null
  volume_lte?: Scalars['BigDecimal'] | null
  volume_in?: Scalars['BigDecimal'][] | null
  volume_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_not?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLocked?: Scalars['BigDecimal'] | null
  totalValueLocked_not?: Scalars['BigDecimal'] | null
  totalValueLocked_gt?: Scalars['BigDecimal'] | null
  totalValueLocked_lt?: Scalars['BigDecimal'] | null
  totalValueLocked_gte?: Scalars['BigDecimal'] | null
  totalValueLocked_lte?: Scalars['BigDecimal'] | null
  totalValueLocked_in?: Scalars['BigDecimal'][] | null
  totalValueLocked_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD_not_in?: Scalars['BigDecimal'][] | null
  priceUSD?: Scalars['BigDecimal'] | null
  priceUSD_not?: Scalars['BigDecimal'] | null
  priceUSD_gt?: Scalars['BigDecimal'] | null
  priceUSD_lt?: Scalars['BigDecimal'] | null
  priceUSD_gte?: Scalars['BigDecimal'] | null
  priceUSD_lte?: Scalars['BigDecimal'] | null
  priceUSD_in?: Scalars['BigDecimal'][] | null
  priceUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  open?: Scalars['BigDecimal'] | null
  open_not?: Scalars['BigDecimal'] | null
  open_gt?: Scalars['BigDecimal'] | null
  open_lt?: Scalars['BigDecimal'] | null
  open_gte?: Scalars['BigDecimal'] | null
  open_lte?: Scalars['BigDecimal'] | null
  open_in?: Scalars['BigDecimal'][] | null
  open_not_in?: Scalars['BigDecimal'][] | null
  high?: Scalars['BigDecimal'] | null
  high_not?: Scalars['BigDecimal'] | null
  high_gt?: Scalars['BigDecimal'] | null
  high_lt?: Scalars['BigDecimal'] | null
  high_gte?: Scalars['BigDecimal'] | null
  high_lte?: Scalars['BigDecimal'] | null
  high_in?: Scalars['BigDecimal'][] | null
  high_not_in?: Scalars['BigDecimal'][] | null
  low?: Scalars['BigDecimal'] | null
  low_not?: Scalars['BigDecimal'] | null
  low_gt?: Scalars['BigDecimal'] | null
  low_lt?: Scalars['BigDecimal'] | null
  low_gte?: Scalars['BigDecimal'] | null
  low_lte?: Scalars['BigDecimal'] | null
  low_in?: Scalars['BigDecimal'][] | null
  low_not_in?: Scalars['BigDecimal'][] | null
  close?: Scalars['BigDecimal'] | null
  close_not?: Scalars['BigDecimal'] | null
  close_gt?: Scalars['BigDecimal'] | null
  close_lt?: Scalars['BigDecimal'] | null
  close_gte?: Scalars['BigDecimal'] | null
  close_lte?: Scalars['BigDecimal'] | null
  close_in?: Scalars['BigDecimal'][] | null
  close_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (TokenHourData_filter | null)[] | null
  or?: (TokenHourData_filter | null)[] | null
}

export interface Token_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  symbol?: Scalars['String'] | null
  symbol_not?: Scalars['String'] | null
  symbol_gt?: Scalars['String'] | null
  symbol_lt?: Scalars['String'] | null
  symbol_gte?: Scalars['String'] | null
  symbol_lte?: Scalars['String'] | null
  symbol_in?: Scalars['String'][] | null
  symbol_not_in?: Scalars['String'][] | null
  symbol_contains?: Scalars['String'] | null
  symbol_contains_nocase?: Scalars['String'] | null
  symbol_not_contains?: Scalars['String'] | null
  symbol_not_contains_nocase?: Scalars['String'] | null
  symbol_starts_with?: Scalars['String'] | null
  symbol_starts_with_nocase?: Scalars['String'] | null
  symbol_not_starts_with?: Scalars['String'] | null
  symbol_not_starts_with_nocase?: Scalars['String'] | null
  symbol_ends_with?: Scalars['String'] | null
  symbol_ends_with_nocase?: Scalars['String'] | null
  symbol_not_ends_with?: Scalars['String'] | null
  symbol_not_ends_with_nocase?: Scalars['String'] | null
  name?: Scalars['String'] | null
  name_not?: Scalars['String'] | null
  name_gt?: Scalars['String'] | null
  name_lt?: Scalars['String'] | null
  name_gte?: Scalars['String'] | null
  name_lte?: Scalars['String'] | null
  name_in?: Scalars['String'][] | null
  name_not_in?: Scalars['String'][] | null
  name_contains?: Scalars['String'] | null
  name_contains_nocase?: Scalars['String'] | null
  name_not_contains?: Scalars['String'] | null
  name_not_contains_nocase?: Scalars['String'] | null
  name_starts_with?: Scalars['String'] | null
  name_starts_with_nocase?: Scalars['String'] | null
  name_not_starts_with?: Scalars['String'] | null
  name_not_starts_with_nocase?: Scalars['String'] | null
  name_ends_with?: Scalars['String'] | null
  name_ends_with_nocase?: Scalars['String'] | null
  name_not_ends_with?: Scalars['String'] | null
  name_not_ends_with_nocase?: Scalars['String'] | null
  decimals?: Scalars['BigInt'] | null
  decimals_not?: Scalars['BigInt'] | null
  decimals_gt?: Scalars['BigInt'] | null
  decimals_lt?: Scalars['BigInt'] | null
  decimals_gte?: Scalars['BigInt'] | null
  decimals_lte?: Scalars['BigInt'] | null
  decimals_in?: Scalars['BigInt'][] | null
  decimals_not_in?: Scalars['BigInt'][] | null
  totalSupply?: Scalars['BigInt'] | null
  totalSupply_not?: Scalars['BigInt'] | null
  totalSupply_gt?: Scalars['BigInt'] | null
  totalSupply_lt?: Scalars['BigInt'] | null
  totalSupply_gte?: Scalars['BigInt'] | null
  totalSupply_lte?: Scalars['BigInt'] | null
  totalSupply_in?: Scalars['BigInt'][] | null
  totalSupply_not_in?: Scalars['BigInt'][] | null
  volume?: Scalars['BigDecimal'] | null
  volume_not?: Scalars['BigDecimal'] | null
  volume_gt?: Scalars['BigDecimal'] | null
  volume_lt?: Scalars['BigDecimal'] | null
  volume_gte?: Scalars['BigDecimal'] | null
  volume_lte?: Scalars['BigDecimal'] | null
  volume_in?: Scalars['BigDecimal'][] | null
  volume_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_not?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lt?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_gte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_lte?: Scalars['BigDecimal'] | null
  untrackedVolumeUSD_in?: Scalars['BigDecimal'][] | null
  untrackedVolumeUSD_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  txCount?: Scalars['BigInt'] | null
  txCount_not?: Scalars['BigInt'] | null
  txCount_gt?: Scalars['BigInt'] | null
  txCount_lt?: Scalars['BigInt'] | null
  txCount_gte?: Scalars['BigInt'] | null
  txCount_lte?: Scalars['BigInt'] | null
  txCount_in?: Scalars['BigInt'][] | null
  txCount_not_in?: Scalars['BigInt'][] | null
  poolCount?: Scalars['BigInt'] | null
  poolCount_not?: Scalars['BigInt'] | null
  poolCount_gt?: Scalars['BigInt'] | null
  poolCount_lt?: Scalars['BigInt'] | null
  poolCount_gte?: Scalars['BigInt'] | null
  poolCount_lte?: Scalars['BigInt'] | null
  poolCount_in?: Scalars['BigInt'][] | null
  poolCount_not_in?: Scalars['BigInt'][] | null
  totalValueLocked?: Scalars['BigDecimal'] | null
  totalValueLocked_not?: Scalars['BigDecimal'] | null
  totalValueLocked_gt?: Scalars['BigDecimal'] | null
  totalValueLocked_lt?: Scalars['BigDecimal'] | null
  totalValueLocked_gte?: Scalars['BigDecimal'] | null
  totalValueLocked_lte?: Scalars['BigDecimal'] | null
  totalValueLocked_in?: Scalars['BigDecimal'][] | null
  totalValueLocked_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSD_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSD_not_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSDUntracked?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_not?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_gt?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_lt?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_gte?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_lte?: Scalars['BigDecimal'] | null
  totalValueLockedUSDUntracked_in?: Scalars['BigDecimal'][] | null
  totalValueLockedUSDUntracked_not_in?: Scalars['BigDecimal'][] | null
  derivedETH?: Scalars['BigDecimal'] | null
  derivedETH_not?: Scalars['BigDecimal'] | null
  derivedETH_gt?: Scalars['BigDecimal'] | null
  derivedETH_lt?: Scalars['BigDecimal'] | null
  derivedETH_gte?: Scalars['BigDecimal'] | null
  derivedETH_lte?: Scalars['BigDecimal'] | null
  derivedETH_in?: Scalars['BigDecimal'][] | null
  derivedETH_not_in?: Scalars['BigDecimal'][] | null
  whitelistPools?: Scalars['String'][] | null
  whitelistPools_not?: Scalars['String'][] | null
  whitelistPools_contains?: Scalars['String'][] | null
  whitelistPools_contains_nocase?: Scalars['String'][] | null
  whitelistPools_not_contains?: Scalars['String'][] | null
  whitelistPools_not_contains_nocase?: Scalars['String'][] | null
  whitelistPools_?: Pool_filter | null
  tokenDayData_?: TokenDayData_filter | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Token_filter | null)[] | null
  or?: (Token_filter | null)[] | null
}

export interface TransactionGenqlSelection {
  id?: boolean | number
  blockNumber?: boolean | number
  timestamp?: boolean | number
  gasUsed?: boolean | number
  gasPrice?: boolean | number
  mints?: MintGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Mint_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Mint_filter | null
    }
  }
  burns?: BurnGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Burn_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Burn_filter | null
    }
  }
  swaps?: SwapGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Swap_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Swap_filter | null
    }
  }
  flashed?: FlashGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Flash_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Flash_filter | null
    }
  }
  collects?: CollectGenqlSelection & {
    __args?: {
      skip?: Scalars['Int'] | null
      first?: Scalars['Int'] | null
      orderBy?: Collect_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Collect_filter | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Transaction_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  blockNumber?: Scalars['BigInt'] | null
  blockNumber_not?: Scalars['BigInt'] | null
  blockNumber_gt?: Scalars['BigInt'] | null
  blockNumber_lt?: Scalars['BigInt'] | null
  blockNumber_gte?: Scalars['BigInt'] | null
  blockNumber_lte?: Scalars['BigInt'] | null
  blockNumber_in?: Scalars['BigInt'][] | null
  blockNumber_not_in?: Scalars['BigInt'][] | null
  timestamp?: Scalars['BigInt'] | null
  timestamp_not?: Scalars['BigInt'] | null
  timestamp_gt?: Scalars['BigInt'] | null
  timestamp_lt?: Scalars['BigInt'] | null
  timestamp_gte?: Scalars['BigInt'] | null
  timestamp_lte?: Scalars['BigInt'] | null
  timestamp_in?: Scalars['BigInt'][] | null
  timestamp_not_in?: Scalars['BigInt'][] | null
  gasUsed?: Scalars['BigInt'] | null
  gasUsed_not?: Scalars['BigInt'] | null
  gasUsed_gt?: Scalars['BigInt'] | null
  gasUsed_lt?: Scalars['BigInt'] | null
  gasUsed_gte?: Scalars['BigInt'] | null
  gasUsed_lte?: Scalars['BigInt'] | null
  gasUsed_in?: Scalars['BigInt'][] | null
  gasUsed_not_in?: Scalars['BigInt'][] | null
  gasPrice?: Scalars['BigInt'] | null
  gasPrice_not?: Scalars['BigInt'] | null
  gasPrice_gt?: Scalars['BigInt'] | null
  gasPrice_lt?: Scalars['BigInt'] | null
  gasPrice_gte?: Scalars['BigInt'] | null
  gasPrice_lte?: Scalars['BigInt'] | null
  gasPrice_in?: Scalars['BigInt'][] | null
  gasPrice_not_in?: Scalars['BigInt'][] | null
  mints_?: Mint_filter | null
  burns_?: Burn_filter | null
  swaps_?: Swap_filter | null
  flashed_?: Flash_filter | null
  collects_?: Collect_filter | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (Transaction_filter | null)[] | null
  or?: (Transaction_filter | null)[] | null
}

export interface UniswapDayDataGenqlSelection {
  id?: boolean | number
  date?: boolean | number
  volumeETH?: boolean | number
  volumeUSD?: boolean | number
  volumeUSDUntracked?: boolean | number
  feesUSD?: boolean | number
  txCount?: boolean | number
  tvlUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UniswapDayData_filter {
  id?: Scalars['ID'] | null
  id_not?: Scalars['ID'] | null
  id_gt?: Scalars['ID'] | null
  id_lt?: Scalars['ID'] | null
  id_gte?: Scalars['ID'] | null
  id_lte?: Scalars['ID'] | null
  id_in?: Scalars['ID'][] | null
  id_not_in?: Scalars['ID'][] | null
  date?: Scalars['Int'] | null
  date_not?: Scalars['Int'] | null
  date_gt?: Scalars['Int'] | null
  date_lt?: Scalars['Int'] | null
  date_gte?: Scalars['Int'] | null
  date_lte?: Scalars['Int'] | null
  date_in?: Scalars['Int'][] | null
  date_not_in?: Scalars['Int'][] | null
  volumeETH?: Scalars['BigDecimal'] | null
  volumeETH_not?: Scalars['BigDecimal'] | null
  volumeETH_gt?: Scalars['BigDecimal'] | null
  volumeETH_lt?: Scalars['BigDecimal'] | null
  volumeETH_gte?: Scalars['BigDecimal'] | null
  volumeETH_lte?: Scalars['BigDecimal'] | null
  volumeETH_in?: Scalars['BigDecimal'][] | null
  volumeETH_not_in?: Scalars['BigDecimal'][] | null
  volumeUSD?: Scalars['BigDecimal'] | null
  volumeUSD_not?: Scalars['BigDecimal'] | null
  volumeUSD_gt?: Scalars['BigDecimal'] | null
  volumeUSD_lt?: Scalars['BigDecimal'] | null
  volumeUSD_gte?: Scalars['BigDecimal'] | null
  volumeUSD_lte?: Scalars['BigDecimal'] | null
  volumeUSD_in?: Scalars['BigDecimal'][] | null
  volumeUSD_not_in?: Scalars['BigDecimal'][] | null
  volumeUSDUntracked?: Scalars['BigDecimal'] | null
  volumeUSDUntracked_not?: Scalars['BigDecimal'] | null
  volumeUSDUntracked_gt?: Scalars['BigDecimal'] | null
  volumeUSDUntracked_lt?: Scalars['BigDecimal'] | null
  volumeUSDUntracked_gte?: Scalars['BigDecimal'] | null
  volumeUSDUntracked_lte?: Scalars['BigDecimal'] | null
  volumeUSDUntracked_in?: Scalars['BigDecimal'][] | null
  volumeUSDUntracked_not_in?: Scalars['BigDecimal'][] | null
  feesUSD?: Scalars['BigDecimal'] | null
  feesUSD_not?: Scalars['BigDecimal'] | null
  feesUSD_gt?: Scalars['BigDecimal'] | null
  feesUSD_lt?: Scalars['BigDecimal'] | null
  feesUSD_gte?: Scalars['BigDecimal'] | null
  feesUSD_lte?: Scalars['BigDecimal'] | null
  feesUSD_in?: Scalars['BigDecimal'][] | null
  feesUSD_not_in?: Scalars['BigDecimal'][] | null
  txCount?: Scalars['BigInt'] | null
  txCount_not?: Scalars['BigInt'] | null
  txCount_gt?: Scalars['BigInt'] | null
  txCount_lt?: Scalars['BigInt'] | null
  txCount_gte?: Scalars['BigInt'] | null
  txCount_lte?: Scalars['BigInt'] | null
  txCount_in?: Scalars['BigInt'][] | null
  txCount_not_in?: Scalars['BigInt'][] | null
  tvlUSD?: Scalars['BigDecimal'] | null
  tvlUSD_not?: Scalars['BigDecimal'] | null
  tvlUSD_gt?: Scalars['BigDecimal'] | null
  tvlUSD_lt?: Scalars['BigDecimal'] | null
  tvlUSD_gte?: Scalars['BigDecimal'] | null
  tvlUSD_lte?: Scalars['BigDecimal'] | null
  tvlUSD_in?: Scalars['BigDecimal'][] | null
  tvlUSD_not_in?: Scalars['BigDecimal'][] | null
  /** Filter for the block changed event. */
  _change_block?: BlockChangedFilter | null
  and?: (UniswapDayData_filter | null)[] | null
  or?: (UniswapDayData_filter | null)[] | null
}

export interface _Block_GenqlSelection {
  /** The hash of the block */
  hash?: boolean | number
  /** The block number */
  number?: boolean | number
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** The type for the top-level _meta field */
export interface _Meta_GenqlSelection {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block?: _Block_GenqlSelection
  /** The deployment ID */
  deployment?: boolean | number
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Bundle_possibleTypes: string[] = ['Bundle']
export const isBundle = (obj?: { __typename?: any } | null): obj is Bundle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBundle"')
  return Bundle_possibleTypes.includes(obj.__typename)
}

const Burn_possibleTypes: string[] = ['Burn']
export const isBurn = (obj?: { __typename?: any } | null): obj is Burn => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBurn"')
  return Burn_possibleTypes.includes(obj.__typename)
}

const Collect_possibleTypes: string[] = ['Collect']
export const isCollect = (obj?: { __typename?: any } | null): obj is Collect => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCollect"')
  return Collect_possibleTypes.includes(obj.__typename)
}

const Factory_possibleTypes: string[] = ['Factory']
export const isFactory = (obj?: { __typename?: any } | null): obj is Factory => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFactory"')
  return Factory_possibleTypes.includes(obj.__typename)
}

const Flash_possibleTypes: string[] = ['Flash']
export const isFlash = (obj?: { __typename?: any } | null): obj is Flash => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFlash"')
  return Flash_possibleTypes.includes(obj.__typename)
}

const Mint_possibleTypes: string[] = ['Mint']
export const isMint = (obj?: { __typename?: any } | null): obj is Mint => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMint"')
  return Mint_possibleTypes.includes(obj.__typename)
}

const Pool_possibleTypes: string[] = ['Pool']
export const isPool = (obj?: { __typename?: any } | null): obj is Pool => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPool"')
  return Pool_possibleTypes.includes(obj.__typename)
}

const PoolDayData_possibleTypes: string[] = ['PoolDayData']
export const isPoolDayData = (obj?: { __typename?: any } | null): obj is PoolDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPoolDayData"')
  return PoolDayData_possibleTypes.includes(obj.__typename)
}

const PoolHourData_possibleTypes: string[] = ['PoolHourData']
export const isPoolHourData = (obj?: { __typename?: any } | null): obj is PoolHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPoolHourData"')
  return PoolHourData_possibleTypes.includes(obj.__typename)
}

const Position_possibleTypes: string[] = ['Position']
export const isPosition = (obj?: { __typename?: any } | null): obj is Position => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPosition"')
  return Position_possibleTypes.includes(obj.__typename)
}

const PositionSnapshot_possibleTypes: string[] = ['PositionSnapshot']
export const isPositionSnapshot = (obj?: { __typename?: any } | null): obj is PositionSnapshot => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPositionSnapshot"')
  return PositionSnapshot_possibleTypes.includes(obj.__typename)
}

const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}

const Subscription_possibleTypes: string[] = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}

const Swap_possibleTypes: string[] = ['Swap']
export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}

const Tick_possibleTypes: string[] = ['Tick']
export const isTick = (obj?: { __typename?: any } | null): obj is Tick => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTick"')
  return Tick_possibleTypes.includes(obj.__typename)
}

const TickDayData_possibleTypes: string[] = ['TickDayData']
export const isTickDayData = (obj?: { __typename?: any } | null): obj is TickDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTickDayData"')
  return TickDayData_possibleTypes.includes(obj.__typename)
}

const TickHourData_possibleTypes: string[] = ['TickHourData']
export const isTickHourData = (obj?: { __typename?: any } | null): obj is TickHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTickHourData"')
  return TickHourData_possibleTypes.includes(obj.__typename)
}

const Token_possibleTypes: string[] = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}

const TokenDayData_possibleTypes: string[] = ['TokenDayData']
export const isTokenDayData = (obj?: { __typename?: any } | null): obj is TokenDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTokenDayData"')
  return TokenDayData_possibleTypes.includes(obj.__typename)
}

const TokenHourData_possibleTypes: string[] = ['TokenHourData']
export const isTokenHourData = (obj?: { __typename?: any } | null): obj is TokenHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTokenHourData"')
  return TokenHourData_possibleTypes.includes(obj.__typename)
}

const Transaction_possibleTypes: string[] = ['Transaction']
export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}

const UniswapDayData_possibleTypes: string[] = ['UniswapDayData']
export const isUniswapDayData = (obj?: { __typename?: any } | null): obj is UniswapDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUniswapDayData"')
  return UniswapDayData_possibleTypes.includes(obj.__typename)
}

const _Block__possibleTypes: string[] = ['_Block_']
export const is_Block_ = (obj?: { __typename?: any } | null): obj is _Block_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}

const _Meta__possibleTypes: string[] = ['_Meta_']
export const is_Meta_ = (obj?: { __typename?: any } | null): obj is _Meta_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}

export const enumBundleOrderBy = {
  id: 'id' as const,
  ethPriceUSD: 'ethPriceUSD' as const,
}

export const enumBurnOrderBy = {
  id: 'id' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  token0: 'token0' as const,
  token0__id: 'token0__id' as const,
  token0__symbol: 'token0__symbol' as const,
  token0__name: 'token0__name' as const,
  token0__decimals: 'token0__decimals' as const,
  token0__totalSupply: 'token0__totalSupply' as const,
  token0__volume: 'token0__volume' as const,
  token0__volumeUSD: 'token0__volumeUSD' as const,
  token0__untrackedVolumeUSD: 'token0__untrackedVolumeUSD' as const,
  token0__feesUSD: 'token0__feesUSD' as const,
  token0__txCount: 'token0__txCount' as const,
  token0__poolCount: 'token0__poolCount' as const,
  token0__totalValueLocked: 'token0__totalValueLocked' as const,
  token0__totalValueLockedUSD: 'token0__totalValueLockedUSD' as const,
  token0__totalValueLockedUSDUntracked: 'token0__totalValueLockedUSDUntracked' as const,
  token0__derivedETH: 'token0__derivedETH' as const,
  token1: 'token1' as const,
  token1__id: 'token1__id' as const,
  token1__symbol: 'token1__symbol' as const,
  token1__name: 'token1__name' as const,
  token1__decimals: 'token1__decimals' as const,
  token1__totalSupply: 'token1__totalSupply' as const,
  token1__volume: 'token1__volume' as const,
  token1__volumeUSD: 'token1__volumeUSD' as const,
  token1__untrackedVolumeUSD: 'token1__untrackedVolumeUSD' as const,
  token1__feesUSD: 'token1__feesUSD' as const,
  token1__txCount: 'token1__txCount' as const,
  token1__poolCount: 'token1__poolCount' as const,
  token1__totalValueLocked: 'token1__totalValueLocked' as const,
  token1__totalValueLockedUSD: 'token1__totalValueLockedUSD' as const,
  token1__totalValueLockedUSDUntracked: 'token1__totalValueLockedUSDUntracked' as const,
  token1__derivedETH: 'token1__derivedETH' as const,
  timestamp: 'timestamp' as const,
  owner: 'owner' as const,
  origin: 'origin' as const,
  amount: 'amount' as const,
  amount0: 'amount0' as const,
  amount1: 'amount1' as const,
  amountUSD: 'amountUSD' as const,
  tickLower: 'tickLower' as const,
  tickUpper: 'tickUpper' as const,
  logIndex: 'logIndex' as const,
}

export const enumCollectOrderBy = {
  id: 'id' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  timestamp: 'timestamp' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  owner: 'owner' as const,
  amount0: 'amount0' as const,
  amount1: 'amount1' as const,
  amountUSD: 'amountUSD' as const,
  tickLower: 'tickLower' as const,
  tickUpper: 'tickUpper' as const,
  logIndex: 'logIndex' as const,
}

export const enumFactoryOrderBy = {
  id: 'id' as const,
  poolCount: 'poolCount' as const,
  txCount: 'txCount' as const,
  totalVolumeUSD: 'totalVolumeUSD' as const,
  totalVolumeETH: 'totalVolumeETH' as const,
  totalFeesUSD: 'totalFeesUSD' as const,
  totalFeesETH: 'totalFeesETH' as const,
  untrackedVolumeUSD: 'untrackedVolumeUSD' as const,
  totalValueLockedUSD: 'totalValueLockedUSD' as const,
  totalValueLockedETH: 'totalValueLockedETH' as const,
  totalValueLockedUSDUntracked: 'totalValueLockedUSDUntracked' as const,
  totalValueLockedETHUntracked: 'totalValueLockedETHUntracked' as const,
  owner: 'owner' as const,
}

export const enumFlashOrderBy = {
  id: 'id' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  timestamp: 'timestamp' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  sender: 'sender' as const,
  recipient: 'recipient' as const,
  amount0: 'amount0' as const,
  amount1: 'amount1' as const,
  amountUSD: 'amountUSD' as const,
  amount0Paid: 'amount0Paid' as const,
  amount1Paid: 'amount1Paid' as const,
  logIndex: 'logIndex' as const,
}

export const enumMintOrderBy = {
  id: 'id' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  timestamp: 'timestamp' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  token0: 'token0' as const,
  token0__id: 'token0__id' as const,
  token0__symbol: 'token0__symbol' as const,
  token0__name: 'token0__name' as const,
  token0__decimals: 'token0__decimals' as const,
  token0__totalSupply: 'token0__totalSupply' as const,
  token0__volume: 'token0__volume' as const,
  token0__volumeUSD: 'token0__volumeUSD' as const,
  token0__untrackedVolumeUSD: 'token0__untrackedVolumeUSD' as const,
  token0__feesUSD: 'token0__feesUSD' as const,
  token0__txCount: 'token0__txCount' as const,
  token0__poolCount: 'token0__poolCount' as const,
  token0__totalValueLocked: 'token0__totalValueLocked' as const,
  token0__totalValueLockedUSD: 'token0__totalValueLockedUSD' as const,
  token0__totalValueLockedUSDUntracked: 'token0__totalValueLockedUSDUntracked' as const,
  token0__derivedETH: 'token0__derivedETH' as const,
  token1: 'token1' as const,
  token1__id: 'token1__id' as const,
  token1__symbol: 'token1__symbol' as const,
  token1__name: 'token1__name' as const,
  token1__decimals: 'token1__decimals' as const,
  token1__totalSupply: 'token1__totalSupply' as const,
  token1__volume: 'token1__volume' as const,
  token1__volumeUSD: 'token1__volumeUSD' as const,
  token1__untrackedVolumeUSD: 'token1__untrackedVolumeUSD' as const,
  token1__feesUSD: 'token1__feesUSD' as const,
  token1__txCount: 'token1__txCount' as const,
  token1__poolCount: 'token1__poolCount' as const,
  token1__totalValueLocked: 'token1__totalValueLocked' as const,
  token1__totalValueLockedUSD: 'token1__totalValueLockedUSD' as const,
  token1__totalValueLockedUSDUntracked: 'token1__totalValueLockedUSDUntracked' as const,
  token1__derivedETH: 'token1__derivedETH' as const,
  owner: 'owner' as const,
  sender: 'sender' as const,
  origin: 'origin' as const,
  amount: 'amount' as const,
  amount0: 'amount0' as const,
  amount1: 'amount1' as const,
  amountUSD: 'amountUSD' as const,
  tickLower: 'tickLower' as const,
  tickUpper: 'tickUpper' as const,
  logIndex: 'logIndex' as const,
}

export const enumOrderDirection = {
  asc: 'asc' as const,
  desc: 'desc' as const,
}

export const enumPoolDayDataOrderBy = {
  id: 'id' as const,
  date: 'date' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  liquidity: 'liquidity' as const,
  sqrtPrice: 'sqrtPrice' as const,
  token0Price: 'token0Price' as const,
  token1Price: 'token1Price' as const,
  tick: 'tick' as const,
  feeGrowthGlobal0X128: 'feeGrowthGlobal0X128' as const,
  feeGrowthGlobal1X128: 'feeGrowthGlobal1X128' as const,
  tvlUSD: 'tvlUSD' as const,
  volumeToken0: 'volumeToken0' as const,
  volumeToken1: 'volumeToken1' as const,
  volumeUSD: 'volumeUSD' as const,
  feesUSD: 'feesUSD' as const,
  txCount: 'txCount' as const,
  open: 'open' as const,
  high: 'high' as const,
  low: 'low' as const,
  close: 'close' as const,
}

export const enumPoolHourDataOrderBy = {
  id: 'id' as const,
  periodStartUnix: 'periodStartUnix' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  liquidity: 'liquidity' as const,
  sqrtPrice: 'sqrtPrice' as const,
  token0Price: 'token0Price' as const,
  token1Price: 'token1Price' as const,
  tick: 'tick' as const,
  feeGrowthGlobal0X128: 'feeGrowthGlobal0X128' as const,
  feeGrowthGlobal1X128: 'feeGrowthGlobal1X128' as const,
  tvlUSD: 'tvlUSD' as const,
  volumeToken0: 'volumeToken0' as const,
  volumeToken1: 'volumeToken1' as const,
  volumeUSD: 'volumeUSD' as const,
  feesUSD: 'feesUSD' as const,
  txCount: 'txCount' as const,
  open: 'open' as const,
  high: 'high' as const,
  low: 'low' as const,
  close: 'close' as const,
}

export const enumPoolOrderBy = {
  id: 'id' as const,
  createdAtTimestamp: 'createdAtTimestamp' as const,
  createdAtBlockNumber: 'createdAtBlockNumber' as const,
  token0: 'token0' as const,
  token0__id: 'token0__id' as const,
  token0__symbol: 'token0__symbol' as const,
  token0__name: 'token0__name' as const,
  token0__decimals: 'token0__decimals' as const,
  token0__totalSupply: 'token0__totalSupply' as const,
  token0__volume: 'token0__volume' as const,
  token0__volumeUSD: 'token0__volumeUSD' as const,
  token0__untrackedVolumeUSD: 'token0__untrackedVolumeUSD' as const,
  token0__feesUSD: 'token0__feesUSD' as const,
  token0__txCount: 'token0__txCount' as const,
  token0__poolCount: 'token0__poolCount' as const,
  token0__totalValueLocked: 'token0__totalValueLocked' as const,
  token0__totalValueLockedUSD: 'token0__totalValueLockedUSD' as const,
  token0__totalValueLockedUSDUntracked: 'token0__totalValueLockedUSDUntracked' as const,
  token0__derivedETH: 'token0__derivedETH' as const,
  token1: 'token1' as const,
  token1__id: 'token1__id' as const,
  token1__symbol: 'token1__symbol' as const,
  token1__name: 'token1__name' as const,
  token1__decimals: 'token1__decimals' as const,
  token1__totalSupply: 'token1__totalSupply' as const,
  token1__volume: 'token1__volume' as const,
  token1__volumeUSD: 'token1__volumeUSD' as const,
  token1__untrackedVolumeUSD: 'token1__untrackedVolumeUSD' as const,
  token1__feesUSD: 'token1__feesUSD' as const,
  token1__txCount: 'token1__txCount' as const,
  token1__poolCount: 'token1__poolCount' as const,
  token1__totalValueLocked: 'token1__totalValueLocked' as const,
  token1__totalValueLockedUSD: 'token1__totalValueLockedUSD' as const,
  token1__totalValueLockedUSDUntracked: 'token1__totalValueLockedUSDUntracked' as const,
  token1__derivedETH: 'token1__derivedETH' as const,
  feeTier: 'feeTier' as const,
  liquidity: 'liquidity' as const,
  sqrtPrice: 'sqrtPrice' as const,
  feeGrowthGlobal0X128: 'feeGrowthGlobal0X128' as const,
  feeGrowthGlobal1X128: 'feeGrowthGlobal1X128' as const,
  token0Price: 'token0Price' as const,
  token1Price: 'token1Price' as const,
  tick: 'tick' as const,
  observationIndex: 'observationIndex' as const,
  volumeToken0: 'volumeToken0' as const,
  volumeToken1: 'volumeToken1' as const,
  volumeUSD: 'volumeUSD' as const,
  untrackedVolumeUSD: 'untrackedVolumeUSD' as const,
  feesUSD: 'feesUSD' as const,
  txCount: 'txCount' as const,
  collectedFeesToken0: 'collectedFeesToken0' as const,
  collectedFeesToken1: 'collectedFeesToken1' as const,
  collectedFeesUSD: 'collectedFeesUSD' as const,
  totalValueLockedToken0: 'totalValueLockedToken0' as const,
  totalValueLockedToken1: 'totalValueLockedToken1' as const,
  totalValueLockedETH: 'totalValueLockedETH' as const,
  totalValueLockedUSD: 'totalValueLockedUSD' as const,
  totalValueLockedUSDUntracked: 'totalValueLockedUSDUntracked' as const,
  liquidityProviderCount: 'liquidityProviderCount' as const,
  poolHourData: 'poolHourData' as const,
  poolDayData: 'poolDayData' as const,
  mints: 'mints' as const,
  burns: 'burns' as const,
  swaps: 'swaps' as const,
  collects: 'collects' as const,
  ticks: 'ticks' as const,
}

export const enumPositionSnapshotOrderBy = {
  id: 'id' as const,
  owner: 'owner' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  position: 'position' as const,
  position__id: 'position__id' as const,
  position__owner: 'position__owner' as const,
  position__liquidity: 'position__liquidity' as const,
  position__depositedToken0: 'position__depositedToken0' as const,
  position__depositedToken1: 'position__depositedToken1' as const,
  position__withdrawnToken0: 'position__withdrawnToken0' as const,
  position__withdrawnToken1: 'position__withdrawnToken1' as const,
  position__collectedFeesToken0: 'position__collectedFeesToken0' as const,
  position__collectedFeesToken1: 'position__collectedFeesToken1' as const,
  position__feeGrowthInside0LastX128: 'position__feeGrowthInside0LastX128' as const,
  position__feeGrowthInside1LastX128: 'position__feeGrowthInside1LastX128' as const,
  blockNumber: 'blockNumber' as const,
  timestamp: 'timestamp' as const,
  liquidity: 'liquidity' as const,
  depositedToken0: 'depositedToken0' as const,
  depositedToken1: 'depositedToken1' as const,
  withdrawnToken0: 'withdrawnToken0' as const,
  withdrawnToken1: 'withdrawnToken1' as const,
  collectedFeesToken0: 'collectedFeesToken0' as const,
  collectedFeesToken1: 'collectedFeesToken1' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  feeGrowthInside0LastX128: 'feeGrowthInside0LastX128' as const,
  feeGrowthInside1LastX128: 'feeGrowthInside1LastX128' as const,
}

export const enumPositionOrderBy = {
  id: 'id' as const,
  owner: 'owner' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  token0: 'token0' as const,
  token0__id: 'token0__id' as const,
  token0__symbol: 'token0__symbol' as const,
  token0__name: 'token0__name' as const,
  token0__decimals: 'token0__decimals' as const,
  token0__totalSupply: 'token0__totalSupply' as const,
  token0__volume: 'token0__volume' as const,
  token0__volumeUSD: 'token0__volumeUSD' as const,
  token0__untrackedVolumeUSD: 'token0__untrackedVolumeUSD' as const,
  token0__feesUSD: 'token0__feesUSD' as const,
  token0__txCount: 'token0__txCount' as const,
  token0__poolCount: 'token0__poolCount' as const,
  token0__totalValueLocked: 'token0__totalValueLocked' as const,
  token0__totalValueLockedUSD: 'token0__totalValueLockedUSD' as const,
  token0__totalValueLockedUSDUntracked: 'token0__totalValueLockedUSDUntracked' as const,
  token0__derivedETH: 'token0__derivedETH' as const,
  token1: 'token1' as const,
  token1__id: 'token1__id' as const,
  token1__symbol: 'token1__symbol' as const,
  token1__name: 'token1__name' as const,
  token1__decimals: 'token1__decimals' as const,
  token1__totalSupply: 'token1__totalSupply' as const,
  token1__volume: 'token1__volume' as const,
  token1__volumeUSD: 'token1__volumeUSD' as const,
  token1__untrackedVolumeUSD: 'token1__untrackedVolumeUSD' as const,
  token1__feesUSD: 'token1__feesUSD' as const,
  token1__txCount: 'token1__txCount' as const,
  token1__poolCount: 'token1__poolCount' as const,
  token1__totalValueLocked: 'token1__totalValueLocked' as const,
  token1__totalValueLockedUSD: 'token1__totalValueLockedUSD' as const,
  token1__totalValueLockedUSDUntracked: 'token1__totalValueLockedUSDUntracked' as const,
  token1__derivedETH: 'token1__derivedETH' as const,
  tickLower: 'tickLower' as const,
  tickLower__id: 'tickLower__id' as const,
  tickLower__poolAddress: 'tickLower__poolAddress' as const,
  tickLower__tickIdx: 'tickLower__tickIdx' as const,
  tickLower__liquidityGross: 'tickLower__liquidityGross' as const,
  tickLower__liquidityNet: 'tickLower__liquidityNet' as const,
  tickLower__price0: 'tickLower__price0' as const,
  tickLower__price1: 'tickLower__price1' as const,
  tickLower__volumeToken0: 'tickLower__volumeToken0' as const,
  tickLower__volumeToken1: 'tickLower__volumeToken1' as const,
  tickLower__volumeUSD: 'tickLower__volumeUSD' as const,
  tickLower__untrackedVolumeUSD: 'tickLower__untrackedVolumeUSD' as const,
  tickLower__feesUSD: 'tickLower__feesUSD' as const,
  tickLower__collectedFeesToken0: 'tickLower__collectedFeesToken0' as const,
  tickLower__collectedFeesToken1: 'tickLower__collectedFeesToken1' as const,
  tickLower__collectedFeesUSD: 'tickLower__collectedFeesUSD' as const,
  tickLower__createdAtTimestamp: 'tickLower__createdAtTimestamp' as const,
  tickLower__createdAtBlockNumber: 'tickLower__createdAtBlockNumber' as const,
  tickLower__liquidityProviderCount: 'tickLower__liquidityProviderCount' as const,
  tickLower__feeGrowthOutside0X128: 'tickLower__feeGrowthOutside0X128' as const,
  tickLower__feeGrowthOutside1X128: 'tickLower__feeGrowthOutside1X128' as const,
  tickUpper: 'tickUpper' as const,
  tickUpper__id: 'tickUpper__id' as const,
  tickUpper__poolAddress: 'tickUpper__poolAddress' as const,
  tickUpper__tickIdx: 'tickUpper__tickIdx' as const,
  tickUpper__liquidityGross: 'tickUpper__liquidityGross' as const,
  tickUpper__liquidityNet: 'tickUpper__liquidityNet' as const,
  tickUpper__price0: 'tickUpper__price0' as const,
  tickUpper__price1: 'tickUpper__price1' as const,
  tickUpper__volumeToken0: 'tickUpper__volumeToken0' as const,
  tickUpper__volumeToken1: 'tickUpper__volumeToken1' as const,
  tickUpper__volumeUSD: 'tickUpper__volumeUSD' as const,
  tickUpper__untrackedVolumeUSD: 'tickUpper__untrackedVolumeUSD' as const,
  tickUpper__feesUSD: 'tickUpper__feesUSD' as const,
  tickUpper__collectedFeesToken0: 'tickUpper__collectedFeesToken0' as const,
  tickUpper__collectedFeesToken1: 'tickUpper__collectedFeesToken1' as const,
  tickUpper__collectedFeesUSD: 'tickUpper__collectedFeesUSD' as const,
  tickUpper__createdAtTimestamp: 'tickUpper__createdAtTimestamp' as const,
  tickUpper__createdAtBlockNumber: 'tickUpper__createdAtBlockNumber' as const,
  tickUpper__liquidityProviderCount: 'tickUpper__liquidityProviderCount' as const,
  tickUpper__feeGrowthOutside0X128: 'tickUpper__feeGrowthOutside0X128' as const,
  tickUpper__feeGrowthOutside1X128: 'tickUpper__feeGrowthOutside1X128' as const,
  liquidity: 'liquidity' as const,
  depositedToken0: 'depositedToken0' as const,
  depositedToken1: 'depositedToken1' as const,
  withdrawnToken0: 'withdrawnToken0' as const,
  withdrawnToken1: 'withdrawnToken1' as const,
  collectedFeesToken0: 'collectedFeesToken0' as const,
  collectedFeesToken1: 'collectedFeesToken1' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  feeGrowthInside0LastX128: 'feeGrowthInside0LastX128' as const,
  feeGrowthInside1LastX128: 'feeGrowthInside1LastX128' as const,
}

export const enumSwapOrderBy = {
  id: 'id' as const,
  transaction: 'transaction' as const,
  transaction__id: 'transaction__id' as const,
  transaction__blockNumber: 'transaction__blockNumber' as const,
  transaction__timestamp: 'transaction__timestamp' as const,
  transaction__gasUsed: 'transaction__gasUsed' as const,
  transaction__gasPrice: 'transaction__gasPrice' as const,
  timestamp: 'timestamp' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  token0: 'token0' as const,
  token0__id: 'token0__id' as const,
  token0__symbol: 'token0__symbol' as const,
  token0__name: 'token0__name' as const,
  token0__decimals: 'token0__decimals' as const,
  token0__totalSupply: 'token0__totalSupply' as const,
  token0__volume: 'token0__volume' as const,
  token0__volumeUSD: 'token0__volumeUSD' as const,
  token0__untrackedVolumeUSD: 'token0__untrackedVolumeUSD' as const,
  token0__feesUSD: 'token0__feesUSD' as const,
  token0__txCount: 'token0__txCount' as const,
  token0__poolCount: 'token0__poolCount' as const,
  token0__totalValueLocked: 'token0__totalValueLocked' as const,
  token0__totalValueLockedUSD: 'token0__totalValueLockedUSD' as const,
  token0__totalValueLockedUSDUntracked: 'token0__totalValueLockedUSDUntracked' as const,
  token0__derivedETH: 'token0__derivedETH' as const,
  token1: 'token1' as const,
  token1__id: 'token1__id' as const,
  token1__symbol: 'token1__symbol' as const,
  token1__name: 'token1__name' as const,
  token1__decimals: 'token1__decimals' as const,
  token1__totalSupply: 'token1__totalSupply' as const,
  token1__volume: 'token1__volume' as const,
  token1__volumeUSD: 'token1__volumeUSD' as const,
  token1__untrackedVolumeUSD: 'token1__untrackedVolumeUSD' as const,
  token1__feesUSD: 'token1__feesUSD' as const,
  token1__txCount: 'token1__txCount' as const,
  token1__poolCount: 'token1__poolCount' as const,
  token1__totalValueLocked: 'token1__totalValueLocked' as const,
  token1__totalValueLockedUSD: 'token1__totalValueLockedUSD' as const,
  token1__totalValueLockedUSDUntracked: 'token1__totalValueLockedUSDUntracked' as const,
  token1__derivedETH: 'token1__derivedETH' as const,
  sender: 'sender' as const,
  recipient: 'recipient' as const,
  origin: 'origin' as const,
  amount0: 'amount0' as const,
  amount1: 'amount1' as const,
  amountUSD: 'amountUSD' as const,
  sqrtPriceX96: 'sqrtPriceX96' as const,
  tick: 'tick' as const,
  logIndex: 'logIndex' as const,
}

export const enumTickDayDataOrderBy = {
  id: 'id' as const,
  date: 'date' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  tick: 'tick' as const,
  tick__id: 'tick__id' as const,
  tick__poolAddress: 'tick__poolAddress' as const,
  tick__tickIdx: 'tick__tickIdx' as const,
  tick__liquidityGross: 'tick__liquidityGross' as const,
  tick__liquidityNet: 'tick__liquidityNet' as const,
  tick__price0: 'tick__price0' as const,
  tick__price1: 'tick__price1' as const,
  tick__volumeToken0: 'tick__volumeToken0' as const,
  tick__volumeToken1: 'tick__volumeToken1' as const,
  tick__volumeUSD: 'tick__volumeUSD' as const,
  tick__untrackedVolumeUSD: 'tick__untrackedVolumeUSD' as const,
  tick__feesUSD: 'tick__feesUSD' as const,
  tick__collectedFeesToken0: 'tick__collectedFeesToken0' as const,
  tick__collectedFeesToken1: 'tick__collectedFeesToken1' as const,
  tick__collectedFeesUSD: 'tick__collectedFeesUSD' as const,
  tick__createdAtTimestamp: 'tick__createdAtTimestamp' as const,
  tick__createdAtBlockNumber: 'tick__createdAtBlockNumber' as const,
  tick__liquidityProviderCount: 'tick__liquidityProviderCount' as const,
  tick__feeGrowthOutside0X128: 'tick__feeGrowthOutside0X128' as const,
  tick__feeGrowthOutside1X128: 'tick__feeGrowthOutside1X128' as const,
  liquidityGross: 'liquidityGross' as const,
  liquidityNet: 'liquidityNet' as const,
  volumeToken0: 'volumeToken0' as const,
  volumeToken1: 'volumeToken1' as const,
  volumeUSD: 'volumeUSD' as const,
  feesUSD: 'feesUSD' as const,
  feeGrowthOutside0X128: 'feeGrowthOutside0X128' as const,
  feeGrowthOutside1X128: 'feeGrowthOutside1X128' as const,
}

export const enumTickHourDataOrderBy = {
  id: 'id' as const,
  periodStartUnix: 'periodStartUnix' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  tick: 'tick' as const,
  tick__id: 'tick__id' as const,
  tick__poolAddress: 'tick__poolAddress' as const,
  tick__tickIdx: 'tick__tickIdx' as const,
  tick__liquidityGross: 'tick__liquidityGross' as const,
  tick__liquidityNet: 'tick__liquidityNet' as const,
  tick__price0: 'tick__price0' as const,
  tick__price1: 'tick__price1' as const,
  tick__volumeToken0: 'tick__volumeToken0' as const,
  tick__volumeToken1: 'tick__volumeToken1' as const,
  tick__volumeUSD: 'tick__volumeUSD' as const,
  tick__untrackedVolumeUSD: 'tick__untrackedVolumeUSD' as const,
  tick__feesUSD: 'tick__feesUSD' as const,
  tick__collectedFeesToken0: 'tick__collectedFeesToken0' as const,
  tick__collectedFeesToken1: 'tick__collectedFeesToken1' as const,
  tick__collectedFeesUSD: 'tick__collectedFeesUSD' as const,
  tick__createdAtTimestamp: 'tick__createdAtTimestamp' as const,
  tick__createdAtBlockNumber: 'tick__createdAtBlockNumber' as const,
  tick__liquidityProviderCount: 'tick__liquidityProviderCount' as const,
  tick__feeGrowthOutside0X128: 'tick__feeGrowthOutside0X128' as const,
  tick__feeGrowthOutside1X128: 'tick__feeGrowthOutside1X128' as const,
  liquidityGross: 'liquidityGross' as const,
  liquidityNet: 'liquidityNet' as const,
  volumeToken0: 'volumeToken0' as const,
  volumeToken1: 'volumeToken1' as const,
  volumeUSD: 'volumeUSD' as const,
  feesUSD: 'feesUSD' as const,
}

export const enumTickOrderBy = {
  id: 'id' as const,
  poolAddress: 'poolAddress' as const,
  tickIdx: 'tickIdx' as const,
  pool: 'pool' as const,
  pool__id: 'pool__id' as const,
  pool__createdAtTimestamp: 'pool__createdAtTimestamp' as const,
  pool__createdAtBlockNumber: 'pool__createdAtBlockNumber' as const,
  pool__feeTier: 'pool__feeTier' as const,
  pool__liquidity: 'pool__liquidity' as const,
  pool__sqrtPrice: 'pool__sqrtPrice' as const,
  pool__feeGrowthGlobal0X128: 'pool__feeGrowthGlobal0X128' as const,
  pool__feeGrowthGlobal1X128: 'pool__feeGrowthGlobal1X128' as const,
  pool__token0Price: 'pool__token0Price' as const,
  pool__token1Price: 'pool__token1Price' as const,
  pool__tick: 'pool__tick' as const,
  pool__observationIndex: 'pool__observationIndex' as const,
  pool__volumeToken0: 'pool__volumeToken0' as const,
  pool__volumeToken1: 'pool__volumeToken1' as const,
  pool__volumeUSD: 'pool__volumeUSD' as const,
  pool__untrackedVolumeUSD: 'pool__untrackedVolumeUSD' as const,
  pool__feesUSD: 'pool__feesUSD' as const,
  pool__txCount: 'pool__txCount' as const,
  pool__collectedFeesToken0: 'pool__collectedFeesToken0' as const,
  pool__collectedFeesToken1: 'pool__collectedFeesToken1' as const,
  pool__collectedFeesUSD: 'pool__collectedFeesUSD' as const,
  pool__totalValueLockedToken0: 'pool__totalValueLockedToken0' as const,
  pool__totalValueLockedToken1: 'pool__totalValueLockedToken1' as const,
  pool__totalValueLockedETH: 'pool__totalValueLockedETH' as const,
  pool__totalValueLockedUSD: 'pool__totalValueLockedUSD' as const,
  pool__totalValueLockedUSDUntracked: 'pool__totalValueLockedUSDUntracked' as const,
  pool__liquidityProviderCount: 'pool__liquidityProviderCount' as const,
  liquidityGross: 'liquidityGross' as const,
  liquidityNet: 'liquidityNet' as const,
  price0: 'price0' as const,
  price1: 'price1' as const,
  volumeToken0: 'volumeToken0' as const,
  volumeToken1: 'volumeToken1' as const,
  volumeUSD: 'volumeUSD' as const,
  untrackedVolumeUSD: 'untrackedVolumeUSD' as const,
  feesUSD: 'feesUSD' as const,
  collectedFeesToken0: 'collectedFeesToken0' as const,
  collectedFeesToken1: 'collectedFeesToken1' as const,
  collectedFeesUSD: 'collectedFeesUSD' as const,
  createdAtTimestamp: 'createdAtTimestamp' as const,
  createdAtBlockNumber: 'createdAtBlockNumber' as const,
  liquidityProviderCount: 'liquidityProviderCount' as const,
  feeGrowthOutside0X128: 'feeGrowthOutside0X128' as const,
  feeGrowthOutside1X128: 'feeGrowthOutside1X128' as const,
}

export const enumTokenDayDataOrderBy = {
  id: 'id' as const,
  date: 'date' as const,
  token: 'token' as const,
  token__id: 'token__id' as const,
  token__symbol: 'token__symbol' as const,
  token__name: 'token__name' as const,
  token__decimals: 'token__decimals' as const,
  token__totalSupply: 'token__totalSupply' as const,
  token__volume: 'token__volume' as const,
  token__volumeUSD: 'token__volumeUSD' as const,
  token__untrackedVolumeUSD: 'token__untrackedVolumeUSD' as const,
  token__feesUSD: 'token__feesUSD' as const,
  token__txCount: 'token__txCount' as const,
  token__poolCount: 'token__poolCount' as const,
  token__totalValueLocked: 'token__totalValueLocked' as const,
  token__totalValueLockedUSD: 'token__totalValueLockedUSD' as const,
  token__totalValueLockedUSDUntracked: 'token__totalValueLockedUSDUntracked' as const,
  token__derivedETH: 'token__derivedETH' as const,
  volume: 'volume' as const,
  volumeUSD: 'volumeUSD' as const,
  untrackedVolumeUSD: 'untrackedVolumeUSD' as const,
  totalValueLocked: 'totalValueLocked' as const,
  totalValueLockedUSD: 'totalValueLockedUSD' as const,
  priceUSD: 'priceUSD' as const,
  feesUSD: 'feesUSD' as const,
  open: 'open' as const,
  high: 'high' as const,
  low: 'low' as const,
  close: 'close' as const,
}

export const enumTokenHourDataOrderBy = {
  id: 'id' as const,
  periodStartUnix: 'periodStartUnix' as const,
  token: 'token' as const,
  token__id: 'token__id' as const,
  token__symbol: 'token__symbol' as const,
  token__name: 'token__name' as const,
  token__decimals: 'token__decimals' as const,
  token__totalSupply: 'token__totalSupply' as const,
  token__volume: 'token__volume' as const,
  token__volumeUSD: 'token__volumeUSD' as const,
  token__untrackedVolumeUSD: 'token__untrackedVolumeUSD' as const,
  token__feesUSD: 'token__feesUSD' as const,
  token__txCount: 'token__txCount' as const,
  token__poolCount: 'token__poolCount' as const,
  token__totalValueLocked: 'token__totalValueLocked' as const,
  token__totalValueLockedUSD: 'token__totalValueLockedUSD' as const,
  token__totalValueLockedUSDUntracked: 'token__totalValueLockedUSDUntracked' as const,
  token__derivedETH: 'token__derivedETH' as const,
  volume: 'volume' as const,
  volumeUSD: 'volumeUSD' as const,
  untrackedVolumeUSD: 'untrackedVolumeUSD' as const,
  totalValueLocked: 'totalValueLocked' as const,
  totalValueLockedUSD: 'totalValueLockedUSD' as const,
  priceUSD: 'priceUSD' as const,
  feesUSD: 'feesUSD' as const,
  open: 'open' as const,
  high: 'high' as const,
  low: 'low' as const,
  close: 'close' as const,
}

export const enumTokenOrderBy = {
  id: 'id' as const,
  symbol: 'symbol' as const,
  name: 'name' as const,
  decimals: 'decimals' as const,
  totalSupply: 'totalSupply' as const,
  volume: 'volume' as const,
  volumeUSD: 'volumeUSD' as const,
  untrackedVolumeUSD: 'untrackedVolumeUSD' as const,
  feesUSD: 'feesUSD' as const,
  txCount: 'txCount' as const,
  poolCount: 'poolCount' as const,
  totalValueLocked: 'totalValueLocked' as const,
  totalValueLockedUSD: 'totalValueLockedUSD' as const,
  totalValueLockedUSDUntracked: 'totalValueLockedUSDUntracked' as const,
  derivedETH: 'derivedETH' as const,
  whitelistPools: 'whitelistPools' as const,
  tokenDayData: 'tokenDayData' as const,
}

export const enumTransactionOrderBy = {
  id: 'id' as const,
  blockNumber: 'blockNumber' as const,
  timestamp: 'timestamp' as const,
  gasUsed: 'gasUsed' as const,
  gasPrice: 'gasPrice' as const,
  mints: 'mints' as const,
  burns: 'burns' as const,
  swaps: 'swaps' as const,
  flashed: 'flashed' as const,
  collects: 'collects' as const,
}

export const enumUniswapDayDataOrderBy = {
  id: 'id' as const,
  date: 'date' as const,
  volumeETH: 'volumeETH' as const,
  volumeUSD: 'volumeUSD' as const,
  volumeUSDUntracked: 'volumeUSDUntracked' as const,
  feesUSD: 'feesUSD' as const,
  txCount: 'txCount' as const,
  tvlUSD: 'tvlUSD' as const,
}

export const enumSubgraphErrorPolicy = {
  allow: 'allow' as const,
  deny: 'deny' as const,
}
