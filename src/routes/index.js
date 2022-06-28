import { Router } from "express";
import coursesRouter from "./coursesRoutes.js";

const router = Router();

router.use(coursesRouter);

export default router;
