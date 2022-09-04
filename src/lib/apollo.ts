import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl7nj0tt02kce01ukd8j66c5z/master",
  cache: new InMemoryCache(),
})