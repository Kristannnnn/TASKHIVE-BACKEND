import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  taskName: string;
  category: string;
  status: "pending" | "completed";
  user: mongoose.Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
  taskName: { type: String, required: true },
  category: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
