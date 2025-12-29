import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    // Define course schema here
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
