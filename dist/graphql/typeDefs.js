"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _loadFiles = require("@graphql-tools/load-files");

var _merge = require("@graphql-tools/merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var typesArray = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, './modules'), {
  extensions: ['gql'],
  recursive: true
});
var typesDefs = (0, _merge.mergeTypeDefs)(typesArray); // console.log(typesDefs);

var _default = typesDefs;
exports["default"] = _default;