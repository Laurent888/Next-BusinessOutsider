import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    getNewStories(page: Int): [Story]
    getAskStories(page: Int): [Story]
    getSingleStory(id: Int): Story
  }

  type Story {
    id: Int!
    title: String!
    points: Int!
    user: String!
    time: Int!
    time_ago: String!
    comments_count: Int!
    type: String!
    url: String!
    domain: String!
    comments: [Comment]
  }

  type Comment {
    id: Int!
    user: String
    time: Int!
    time_ago: String!
    type: String!
    content: String!
    comments: [Comment]
  }
`;

export default typeDefs;
