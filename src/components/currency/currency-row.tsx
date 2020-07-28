import React from 'react'
import { CURRENCY, MARKET } from '../../common/types/types'
import { Link} from 'react-router-dom'
import {convertMillionNotation, roundToDecimals} from '../../common/utils/commonUtils'

interface CurrencyRowProps {
    currency: CURRENCY
}

function CurrencyRow(props: CurrencyRowProps) {
    const {assetName, assetSymbol, marketCap, markets} = props.currency
    const getAverageLastPrice = (markets: MARKET[]) => {
            return markets.reduce((acc: number, curr: MARKET) => {
            if(curr.ticker){
                return (acc + parseFloat(curr.ticker.lastPrice))
            }
            return acc + 0
        }, 0)/markets.length
    }
    return (
        <div className='CurrencyRow'>
            <Link className='row' to={`/markets/${assetSymbol}`}>
                <div>{assetName}</div>
                <div>{markets[0].marketSymbol.split(':')[1]}</div>
                <div>{assetSymbol}</div>
                <div>{convertMillionNotation(marketCap)}</div>
                <div>{convertMillionNotation(roundToDecimals(getAverageLastPrice(markets)))}</div>
            </Link>
        </div>
    )
}

export default CurrencyRow