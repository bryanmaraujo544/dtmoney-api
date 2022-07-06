import { UserInputError } from 'apollo-server';
import User from '../../../models/User';

export default {
  Query: {
    login: async (_, { email, password }) => {
      console.log({ email, password });
      const user = await User.findOne({ email });

      if (!user) {
        throw new UserInputError('User does not exists');
      }

      if (user.password !== password) {
        throw new UserInputError('Password is wrong');
      }

      return true;
    },
  },
};
