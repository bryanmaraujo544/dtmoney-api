import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const resolversArray = loadFilesSync(
  path.join(__dirname, './modules', '**', 'resolvers.js'),
  {
    extensions: ['js'],
    recursive: true,
  }
);

const resolvers = mergeResolvers(resolversArray);

console.log(resolvers);

export default resolvers;
