import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const link = "https://hacker-news.firebaseio.com/v0/topstories";

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.graphqlUrl,
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
