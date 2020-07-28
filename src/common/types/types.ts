export interface CURRENCY {
    id: string
    assetName: string
    assetSymbol: string
    marketCap: number
    markets: MARKET[]
}

export interface MARKET {
    marketSymbol: string
    baseSymbol: string
    exchangeSymbol: string
    ticker: TICKER | null
}

export interface TICKER {
    lastPrice: string,
    highPrice: string,
    lowPrice: string,
    percentChange: string
}

export interface GROUPED_MARKETS{
    symbol: string
    markets: MARKET[]
}