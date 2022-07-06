import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
  Post: {
    author: async (postModel) => {
      const post = await User.findById(postModel.author.valueOf());
      return post;
    },
  },
  Query: {
    posts: async () => {
      const posts = await Post.find({});
      return posts;
    },
    post: async (_, { id }) => {
      const post = await Post.findById(id);
      return post;
    },
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: async (_, { id, data }) => {
      const post = await Post.findOneAndUpdate(id, data, { new: true });
      return post;
    },
    deletePost: async (_, { id }) => {
      const deleted = await Post.findOneAndDelete(id);
      return !!deleted;
    },
  },
};
