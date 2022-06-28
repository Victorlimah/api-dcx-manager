import { Router } from "express";
import coursesRouter from "./coursesRoutes";

const router = Router();

router.use(coursesRouter);

export default router;
