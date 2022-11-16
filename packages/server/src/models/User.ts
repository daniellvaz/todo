import mongoose from 'mongoose';
import { User } from '../entities/User';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  image: String,
  password: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: Date,
  deletedAt: Date,
  resetPasswordToken: Number
});

export const UserModel = mongoose.model<User>("users", UserSchema);