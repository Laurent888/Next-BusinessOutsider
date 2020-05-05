import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: `${process.env.BASE_URL}/api/graphql`,
    credentials: "same-origin",
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
