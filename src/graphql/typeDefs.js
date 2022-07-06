import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typesArray = loadFilesSync(path.join(__dirname, './modules'), {
  extensions: ['gql'],
  recursive: true,
});

const typesDefs = mergeTypeDefs(typesArray);

// console.log(typesDefs);

export default typesDefs;
