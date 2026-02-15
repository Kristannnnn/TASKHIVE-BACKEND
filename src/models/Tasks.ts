import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  category: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
