import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.GRAPHQL_URL,
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
