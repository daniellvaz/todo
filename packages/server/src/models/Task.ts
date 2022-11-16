import mongoose from 'mongoose';
import { Task } from '../entities/Task';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "open"
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
  }
});

export const TaskModel = mongoose.model<Task>("tasks", TaskSchema);