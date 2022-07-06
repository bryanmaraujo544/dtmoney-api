import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model('User', Schema);

export default User;
