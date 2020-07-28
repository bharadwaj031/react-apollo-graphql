import { render, cleanup } from "@testing-library/react"
import Header from '../components/home/header'
import React from 'react'
import { HeaderFragment, APP_DATA } from "./mocks/mocksAndFragments"
import { CURRENCY } from "../common/types/types"

const defaultHeaderProps = {
    onSearch: () => ({})
}
const defaultHomeProps = {
    searchText: 'Bitcoin'
}

const defaultCurrencyListProps = {currencyList: APP_DATA.data.assets as CURRENCY[]}
describe('App component test', () => {
    afterEach(cleanup)
    it('should Header take a snapshot', () => {
        const {asFragment, getByTestId } = render(<Header {...defaultHeaderProps}/>)
        expect(asFragment).toMatchSnapshot(HeaderFragment)
        expect(getByTestId('headerText').textContent).toBe('Cryptocurrency Market')
    })
    // it('should App take a snapshot', () => {
    //     const app = TestRenderer.create(<App />).toJSON
    //     // expect(tree).toMatchSnapshot()
    // })
    // it('should CurrencyList take a snapshot', () => {
    //     const tree = renderer.create(
    //     <BrowserRouter>
    //         <CurrencyList {...defaultCurrencyListProps}/>
    //     </BrowserRouter>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })
    // it('should Home take a snapshot', () => {
    //     const mocks = [
    //         {
    //           request: {
    //             query: GET_CURRENCY_LIST,
    //             variables: {
    //               page: 25,
    //             },
    //           },
    //           result: APP_DATA
    //         },
    //       ];
          
    //     const tree = renderer.create(
    //         <BrowserRouter>
    //         <MockedProvider mocks={mocks} addTypename={false}>
    //           <Home searchText=''/>
    //         </MockedProvider></BrowserRouter>,
    //       ).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })
})