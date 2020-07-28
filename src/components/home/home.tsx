import React from 'react';
import CurrencyList from '../currency/currency-list'
import FilteredCurrencyList from '../currency/currency-list-filter'
import {useQuery} from '@apollo/react-hooks'
import {GET_CURRENCY_LIST} from '../../queries/queries'
import '../../styles/home.css'
import '../../styles/header.css'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

interface Props {
  searchText: string
}

type HomeProps = Props & RouteComponentProps<{page: string}>

function Home(props: HomeProps) {
  const {page} = props.match.params
  const limit = !page ? 25 : page === 'All' ? 10000 : page;

  // At this point 25 page is being cached with GraphQL api. have create routing setup for pagination
  const {loading, error, data} = useQuery(GET_CURRENCY_LIST, {variables: {page: limit}})
  const {searchText} = props
  const pages = ['25', '50', 'All']

  if(loading) return(<p>Loading...</p>)
  if(error) return(<p>Error...</p>)

  const pagination = () => {
    return pages.map(page => {
      return <Link className='page' key={page} to={`/assets/${page}`}>{page}</Link> 
    })}
  
  return (
    <div data-testid='home' className='home'>
      {!searchText && <CurrencyList currencyList={data.assets}/>}
      {searchText && <FilteredCurrencyList searchText={searchText}/>}
      <div className='paginator'>
        <span className='page'>View</span>
        {pagination()}
      </div>
    </div>
  );
}

export default withRouter(Home)