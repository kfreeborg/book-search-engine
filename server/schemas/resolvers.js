const { User } = require("../models");

const resolvers = {
  Query: {
    me: async () => {},
  },

  Mutation: {
    createUser: async () => {},
    getSingleUser: async () => {},
    saveBook: async () => {},
    deleteBook: async () => {},
    login: async () => {},
  },
};

module.exports = resolvers;
