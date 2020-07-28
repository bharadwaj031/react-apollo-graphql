export const convertMillionNotation = (num: number, currencyNotation: string = '') => {
    return currencyNotation ? `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${currencyNotation}`: `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

export function roundToDecimals(num: number, decimals: number = 2) {
    const multiplier = Math.pow(10, decimals)
    return Math.round(num * multiplier) / multiplier
}

export const replaceMarketSymbolChars = (marketSymbol: string, original: boolean = false) => {
    return !original ? marketSymbol.replace(/\//g, '-').replace(/:/g, '$'): marketSymbol.replace(/-/g, '/').replace(/\$/g, ':') 
}
