import axios from "axios";

const resolvers = {
  Query: {
    getNewStories: async (_, { page }, context) => {
      const fetchedStories = await axios.get(
        `https://api.hnpwa.com/v0/news/${page}.json`
      );

      return fetchedStories.data;
    },
    getAskStories: async (_, { page }, context) => {
      const fetchedStories = await axios.get(
        `https://api.hnpwa.com/v0/ask/${page}.json`
      );

      return fetchedStories.data;
    },
  },
};

export default resolvers;
