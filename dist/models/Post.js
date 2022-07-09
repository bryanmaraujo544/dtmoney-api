"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

var Post = _mongoose["default"].model('Post', Schema);

var _default = Post;
exports["default"] = _default;