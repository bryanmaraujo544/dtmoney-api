import Transaction from '../../../models/Transaction';
import User from '../../../models/User';

export default {
  Transaction: {
    author: async (schema) => {
      const user = await User.findById(schema.author._id);
      return user;
    },
  },
  Query: {
    transactions: async () => {
      const transactions = await Transaction.find({});
      return transactions;
    },
    getTransactionsByUserId: async (_, { userId }) => {
      const transactions = await Transaction.find({ author: userId });
      return transactions;
    },
  },
  Mutation: {
    createTransaction: async (_, { title, type, category, amount, author }) => {
      const transaction = await Transaction.create({
        title,
        type,
        category,
        amount,
        author,
      });
      return transaction;
    },
  },
};
