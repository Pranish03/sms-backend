import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    // Define semester schema here
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Semester", semesterSchema);
