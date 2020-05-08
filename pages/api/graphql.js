import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../src/services/schema";
import { getMe } from "../../src/components/auth/actions/auth";

const server = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    const me = await getMe(req);
    return { req, res, me };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql" });
