import React from 'react'
import CurrencyRow from './currency-row'
import '../../styles/currency-list.css'
import {CURRENCY} from '../../common/types/types'

interface CurrencyListProps {
    currencyList: CURRENCY[]
}

function CurrencyList(props: CurrencyListProps) {
    const {currencyList} = props
    return(
        <div className='CurrencyList'>
            <div className='headers'>
                <div>Name</div>
                <div>Pair</div>
                <div>Symbol</div>
                <div>Market Cap</div>
                <div>Average Last Price</div>
            </div>
            <div className='list'>
                {currencyList.map((currency: CURRENCY) => (
                    <CurrencyRow key={currency.id} currency={currency}/>
                ))}
            </div>
        </div>
    )
}

export default CurrencyList