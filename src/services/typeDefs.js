import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    getNewStories(page: Int): [Story]
    getAskStories(page: Int): [Story]
    getSingleStory(id: Int): Story
  }

  type Mutation {
    createUser(input: CreateUserInput): ReturnMessage!
    login(email: String!, password: String!): ReturnMessageLogin!
  }

  type ReturnMessage {
    token: String
    error: String
  }

  type ReturnMessageLogin {
    token: String
    error: String
    user: User
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type Story {
    id: Int!
    title: String!
    points: Int
    user: String
    time: Int!
    time_ago: String!
    comments_count: Int!
    type: String!
    url: String!
    domain: String
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

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

export default typeDefs;
