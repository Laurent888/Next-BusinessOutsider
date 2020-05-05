const { RESTDataSource } = require("apollo-datasource-rest");

class HackernewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/topstories.json";
  }
}

module.exports = HackernewsAPI;
