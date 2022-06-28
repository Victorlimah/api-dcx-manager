import { Router } from "express";
import { listCenters } from "../controllers/coursesController";

const coursesRouter = Router();

coursesRouter.get("/centers", listCenters);
coursesRouter.get("/courses/:centerId");

export default coursesRouter;
