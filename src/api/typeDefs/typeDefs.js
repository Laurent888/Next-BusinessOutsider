import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    getNewStories(page: Int): [Story]
    getAskStories(page: Int): [Story]
    getUser: String
  }

  type Story {
    id: Int
    title: String
    points: Int
    user: String
    time: Int
    time_ago: String
    comments_count: Int
    type: String
    url: String
    domain: String
  }
`;

export default typeDefs;
