import { Router } from "express";
import { listCenters, listCourses } from "../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get("/centers", listCenters);
coursesRouter.get("/courses/:centerId", listCourses);

export default coursesRouter;
