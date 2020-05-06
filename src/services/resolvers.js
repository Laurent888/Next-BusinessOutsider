import axios from "axios";

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
  },
};

export default resolvers;
