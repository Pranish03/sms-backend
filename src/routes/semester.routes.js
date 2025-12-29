import express from "express";
import {
  createSemester,
  getSemesters,
  getSemester,
  updateSemester,
  deleteSemester,
} from "../controllers/semester.controller.js";

const router = express.Router();

router.post("/", createSemester);
router.get("/", getSemesters);
router.get("/:id", getSemester);
router.put("/:id", updateSemester);
router.delete("/:id", deleteSemester);

export default router;
