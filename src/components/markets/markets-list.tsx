import React, { Fragment } from'react'
import { withRouter, Link, RouteComponentProps } from 'react-router-dom'
import '../../styles/market.css'
import { GET_MARKET_BY_BASE_SYMBOL } from '../../queries/queries'
import { useQuery } from '@apollo/react-hooks'
import * as _ from 'lodash'
import {roundToDecimals, convertMillionNotation, replaceMarketSymbolChars} from '../../common/utils/commonUtils'

function MarketList(props: RouteComponentProps<{assetName: string}>) {
    const {loading, error, data} = useQuery(GET_MARKET_BY_BASE_SYMBOL, {variables: {assetSymbol: props.match.params.assetName}})
    if(loading) return(<p>Loading...</p>)
    if(error) return(<p>Error...</p>)
    const groupedData = data ? _.chain(data.markets).groupBy('exchangeSymbol').map((value: any, key: string) => ({symbol: key, market: value})).value() : []

    return(
        <div className='Markets'>
        {groupedData.map(d  => (
            <Fragment key={d.symbol}>
                <div className='header'>
                    {d.symbol}
                </div>
                <div className='list'>
                    {d.market.map((m: any) => 
                        <Link key={m.marketSymbol} to={`/market/${replaceMarketSymbolChars(m.marketSymbol)}`} className='item'>
                            <span className='label'>
                                {m.marketSymbol.split(':')[1]}
                            </span>
                            {m.ticker && <span className='price'>
                                {convertMillionNotation(roundToDecimals(parseFloat(m.ticker.lastPrice)))}
                            </span>}
                        </Link>
                    )}
                </div>
            </Fragment>
        ))}
        </div>
    )
}

export default withRouter(MarketList)