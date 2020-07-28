import React from'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import '../../styles/market.css'
import { GET_MARKET_BY_SYMBOL } from '../../queries/queries'
import { useQuery } from '@apollo/react-hooks'
import {roundToDecimals, convertMillionNotation, replaceMarketSymbolChars} from '../../common/utils/commonUtils'

function MarketDetail(props: RouteComponentProps<{marketSymbol: string}>) {
    const marketSymbol = replaceMarketSymbolChars(props.match.params.marketSymbol, true)
    const {loading, error, data} = useQuery(GET_MARKET_BY_SYMBOL, {variables: {marketSymbol: marketSymbol}})
    if(loading) return(<p>Loading...</p>)
    if(error) return(<p>Error...</p>)
    console.log(data)
    const marketDetail = data ? data.markets[0] : {}
    const excludeBaseSymbol = marketDetail.marketSymbol.split(':')[1]
    const currencyNotation = excludeBaseSymbol.split('/')[1] 
    return(
        <div className='Markets'>
            <div className='header'>
                {marketDetail.exchangeSymbol}
            </div>
            <div className='detail'>
                <div className='content'>
                    <div className='detail-header'>{marketDetail.exchangeSymbol}</div>
                    <div className='detail-pair'>
                        <div>
                            <span className='detail'>{excludeBaseSymbol}</span>
                            <span className='footer'>Pair</span>
                        </div>
                        <div>
                            <span className='detail'>
                                {marketDetail.ticker ?
                                convertMillionNotation(roundToDecimals(parseFloat(marketDetail.ticker.lastPrice))) :
                                '--'}
                            </span>
                            <span className='footer'>Price</span>
                        </div>
                    </div>
                    <div className='detail-ticker'>
                        <div>
                            <span className='price'>
                                {marketDetail.ticker ?
                                convertMillionNotation(roundToDecimals(parseFloat(marketDetail.ticker.lastPrice)), currencyNotation) :
                                '--'}
                            </span>
                            <span className='footer'>Last Price</span>
                        </div>
                        <div>
                            <span className={marketDetail.ticker ? parseFloat(marketDetail.ticker.percentChange) > 0 ?'price high' : 'price low' : ''}>
                                {marketDetail.ticker ?
                                    parseFloat(marketDetail.ticker.percentChange) > 0 ? `+${roundToDecimals(parseFloat(marketDetail.ticker.percentChange))}%` :
                                    `${roundToDecimals(parseFloat(marketDetail.ticker.percentChange))}%`:
                                '--'}
                            </span>
                            <span className='footer'>24h Change</span>
                        </div>
                        <div>
                            <span className='price'>
                                {marketDetail.ticker ?
                                convertMillionNotation(roundToDecimals(parseFloat(marketDetail.ticker.lowPrice)), currencyNotation) :
                                '--'}
                            </span>
                            <span className='footer'>24h Low</span>
                        </div>
                        <div>
                            <span className='price'>
                                {marketDetail.ticker ?
                                convertMillionNotation(roundToDecimals(parseFloat(marketDetail.ticker.highPrice)), currencyNotation) :
                                '--'}
                            </span>
                            <span className='footer'>24h High</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MarketDetail)