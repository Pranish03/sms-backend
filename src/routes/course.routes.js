import express from "express";
import {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourse);
router.get("/:id", getCourses);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
