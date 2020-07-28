import {gql} from 'apollo-boost'

export const GET_CURRENCY_LIST = gql`
  query PageAssets($page: Int!) {
    assets(sort: [{marketCapRank: ASC}], page: {skip:0 limit: $page}) {
      id
      assetName
      assetSymbol
      marketCap
      markets {
        marketSymbol
        baseSymbol
        exchangeSymbol
        ticker {
          lastPrice
          highPrice
          lowPrice
          percentChange
        }
      }
    }
  }
`;

export const GET_MARKET_BY_SYMBOL = gql`
query MarketsBySymbol($marketSymbol: String!) {
  markets(filter: {
    marketSymbol: {
      _eq: $marketSymbol
    }
  }) {
    marketSymbol
      baseSymbol
      exchangeSymbol
      ticker {
        lastPrice
        highPrice
        lowPrice
        percentChange
      }
  }
}`;

export const GET_MARKET_BY_BASE_SYMBOL = gql`
query MarketsByBaseSymbol($assetSymbol: String!) {
  markets(filter: {
    baseSymbol: {
      _eq: $assetSymbol
    }
  }) {
    marketSymbol
      baseSymbol
      exchangeSymbol
      ticker {
        lastPrice
        highPrice
        lowPrice
        percentChange
      }
  }
}`;

export const GET_CURRENCY_BY_NAME = gql`
query AssetName($assetName: String!) {
  assets(filter: {
    assetName: {
      _like: $assetName
    }
  }) {
    id
    assetName
    assetSymbol
    marketCap
    markets {
      marketSymbol
      baseSymbol
      exchangeSymbol
      ticker {
        lastPrice
        highPrice
        lowPrice
        percentChange
      }
    }
  }
}
`;
