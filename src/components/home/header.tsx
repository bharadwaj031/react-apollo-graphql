import React from 'react'
import StickyHeader from './sticky-header'
import SearchBox from './search-box'

interface HeaderProps {
    onSearch: (text: string) => void
}

function Header(props: HeaderProps) {

    const navigateHome = () => {
        window.location.href='/'
    }
    const onSearch = (text: string) => {
        props.onSearch(text)
    }
    return (
        <StickyHeader key='header'>
        <div data-testid='headerText' id='headerText' style={{cursor: 'pointer'}} onClick={navigateHome}>Cryptocurrency Market</div>
        <div className='content'>
          <div className='header'>
            <SearchBox onSearch={onSearch} />
          </div>
        </div>
      </StickyHeader>
    )
}

export default Header