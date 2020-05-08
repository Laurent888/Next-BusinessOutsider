// Imports
import axios from "axios";
import { AuthenticationError } from "apollo-server-micro";
import { auth } from "../services/firebase/firebase";

const instance = axios.create({
  baseURL: "https://api.hnpwa.com/v0",
});

const resolvers = {
  Query: {
    getNewStories: async (_, { page }, context) => {
      const fetchedStories = await instance.get(`/news/${page}.json`);
      return fetchedStories.data;
    },
    getAskStories: async (_, { page }, context) => {
      const fetchedStories = await instance.get(`/ask/${page}.json`);

      return fetchedStories.data;
    },

    getSingleStory: async (_, { id }, context) => {
      const fetchedStory = await instance.get(`/item/${id}.json`);

      return fetchedStory.data;
    },
    getMe: async (_, args, { me }) => {
      if (!me) {
        throw new AuthenticationError("Authentication error");
      }
      return me;
    },
  },
  Mutation: {
    createUser: async (_, { input }, context) => {
      const { name, email, password } = input;
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        await res.user.updateProfile({ displayName: name });

        return { error: "", token: "Profile created successfully" };
      } catch (error) {
        return { token: "", error: error.message };
      }
    },
    login: async (_, { email, password }, context) => {
      try {
        const res = await auth.signInWithEmailAndPassword(email, password);
        const token = await res.user.getIdToken();

        const id = await res.user.uid;
        const displayName = await res.user.displayName;

        const user = {
          email,
          id,
          name: displayName,
        };

        return { error: "", token, user };
      } catch (error) {
        return { token: "", error: error.message, user: null };
      }
    },
  },
};

export default resolvers;
