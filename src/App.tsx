import React, { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home/home'
import Header from './components/home/header'
import MarketList from './components/markets/markets-list'
import MarketDetail from './components/markets/market'
import './styles/header.css'

function App() {
    const [text, setText] = useState('')
    const onSearch = (text: string) => {
        setText(text)
    }
  return (
    <div className="app-container">
        <Header onSearch={onSearch}/>
        <Router>
            <div className='container'>
                <Switch>
                    <Route exact={true} path='/' component={() => (<Home searchText={text}/>)}/>
                    <Route exact path='/assets/:page' component={() => (<Home searchText={text}/>)}/>
                    <Route path='/markets/:assetName' component={MarketList}/>
                    <Route path='/market/:marketSymbol' component={MarketDetail}/>
                </Switch>
            </div>
        </Router>
    </div>)
}

export default App;