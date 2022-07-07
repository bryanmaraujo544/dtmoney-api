import mongoose from 'mongoose';
import { DateTime } from 'luxon';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: String,
    default: DateTime.local().setZone('UTC-3').toISO(),
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', Schema);

export default Transaction;
