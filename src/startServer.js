import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: true,
      credentials: true,
    },
  });
  server.listen().then(({ url }) => console.log(`🔥 Server running at ${url}`));
}

export default startServer;
