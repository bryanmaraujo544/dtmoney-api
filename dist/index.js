"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _startServer = _interopRequireDefault(require("./startServer.js"));

var _typeDefs = _interopRequireDefault(require("./graphql/typeDefs.js"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

(0, _startServer["default"])({
  typeDefs: _typeDefs["default"],
  resolvers: _resolvers["default"]
});