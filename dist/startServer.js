"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function startServer(_ref) {
  var typeDefs = _ref.typeDefs,
      resolvers = _ref.resolvers;

  _mongoose["default"].connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var server = new _apolloServer.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: {
      origin: true,
      credentials: true
    }
  });
  server.listen({
    port: process.env.PORT || 4000
  }).then(function (_ref2) {
    var url = _ref2.url;
    return console.log("\uD83D\uDD25 Server running at ".concat(url));
  });
}

var _default = startServer;
exports["default"] = _default;