"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _luxon = require("luxon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    require: true
  },
  createdAt: {
    type: String,
    "default": _luxon.DateTime.local().setZone('UTC-3').toISO()
  },
  author: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

var Transaction = _mongoose["default"].model('Transaction', Schema);

var _default = Transaction;
exports["default"] = _default;