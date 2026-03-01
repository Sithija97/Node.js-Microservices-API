import { Schema, model } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  userId: string;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true },
);

export const Task = model<ITask>("Task", TaskSchema);
