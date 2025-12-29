import express from "express";
import cors from "cors";

import courseRoutes from "./routes/course.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import semesterRoutes from "./routes/semester.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes are registered here
app.get("/", (req, res) => res.send("Welcome to SMS backend"));

app.use("/api/courses", courseRoutes);
app.use("/api/dept", departmentRoutes);
app.use("/api/semesters", semesterRoutes);

export default app;
