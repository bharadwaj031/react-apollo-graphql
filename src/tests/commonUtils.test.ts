import {convertMillionNotation, roundToDecimals, replaceMarketSymbolChars} from '../common/utils/commonUtils'

describe('Common Utils Test', () => {
    it('convertMillionNotation method without notation test', () =>{
        const value = convertMillionNotation(12345678)
        expect(value).toEqual('$12,345,678')
    })
    it('convertMillionNotation method with notation test', () =>{
        const value = convertMillionNotation(12345678, 'USDT')
        expect(value).toEqual('12,345,678.USDT')
    })
    it('roundToDecimals method test', () =>{
        const value = roundToDecimals(123.45678)
        expect(value).toEqual(123.46)
    })
    it('roundToDecimals method test with more than 2 decimals', () =>{
        const value = roundToDecimals(123.45678, 3)
        expect(value).toEqual(123.457)
    })
    it('replaceMarketSymbolChars method test with original as false', () =>{
        const value = replaceMarketSymbolChars('Bibox:BIBOX/USDT')
        expect(value).toEqual('Bibox$BIBOX-USDT')
    })
    it('replaceMarketSymbolChars method test with original as true', () =>{
        const value = replaceMarketSymbolChars('Bibox$BIBOX-USDT', true)
        expect(value).toEqual('Bibox:BIBOX/USDT')
    })
})