import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    // Define department schema here
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Department", departmentSchema);
