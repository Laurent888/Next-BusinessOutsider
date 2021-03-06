import { gql } from "apollo-boost";

export const GET_SINGLEPOST = gql`
  query($id: Int) {
    getSingleStory(id: $id) {
      id
      points
      user
      time
      time_ago
      domain
      url
      title
      comments_count
      comments {
        user
        time_ago
        content
      }
    }
  }
`;

export const GET_NEWS = gql`
  query($page: Int!) {
    getNewStories(page: $page) {
      id
      title
      user
      url
      time_ago
      points
      comments_count
    }
  }
`;

export const GET_ASKNEWS = gql`
  query($page: Int!) {
    getAskStories(page: $page) {
      id
      title
      user
      url
      time_ago
      points
      comments_count
    }
  }
`;

export const CREATE_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      token
      error
    }
  }
`;

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      error
      user {
        id
        name
        email
      }
    }
  }
`;
