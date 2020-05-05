import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../src/services/schema";

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql" });
