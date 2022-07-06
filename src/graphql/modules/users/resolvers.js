import { UserInputError } from 'apollo-server';
import User from '../../../models/User';

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },

  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
  },
  Mutation: {
    createUser: async (_, { data }) => {
      const isEmailInUser = await User.findOne({ email: data.email });

      if (isEmailInUser) {
        throw new UserInputError('Email is already in use');
      }

      const userCreated = await User.create({
        ...data,
        email: data.email.toLowerCase(),
      });
      return userCreated;
    },
    updateUser: async (_, { id, data }) => {
      const user = await User.findOneAndUpdate(id, data, { new: true });
      return user;
    },
    deleteUser: async (_, { id }) => {
      const deleted = await User.findOneAndDelete(id);
      return !!deleted;
    },
  },
};
