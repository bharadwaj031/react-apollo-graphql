import React from 'react'
import CurrencyList from './currency-list'
import {APP_DATA } from '../../tests/mocks/mocksAndFragments'

interface FilteredCurrencyList {
    searchText: string
}

function FilteredCurrencyList(props: FilteredCurrencyList) {
    // const {loading, error, data} = useQuery(GET_CURRENCY_BY_NAME, {variables: {assetName: `%${props.match.params.searchText}`}})
    const data = APP_DATA.data.assets.filter(d => d.assetName.toLowerCase().includes(props.searchText.toLowerCase()))
    //   if(loading) return(<p>Loading...</p>)
    //   if(error) return(<p>Error...</p>)
    // currencyList = data.assets when the graphql data is available
    return(
            <CurrencyList currencyList={data}/>
    )
}

export default FilteredCurrencyList
