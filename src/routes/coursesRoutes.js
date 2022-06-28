import { Router } from "express";
import { listCenters, listCourses, listStudents } from "../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get("/centers", listCenters);
coursesRouter.get("/courses/:centerId", listCourses);
coursesRouter.get("/student/:studentName/:courseCode", listStudents);

export default coursesRouter;
