import { ApolloServer } from "apollo-server-micro";
import resolvers from "../../src/api/resolvers/resolvers";
import typeDefs from "../../src/api/typeDefs/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx) => ctx,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql" });
