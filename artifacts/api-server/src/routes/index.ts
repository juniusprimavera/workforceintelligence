import { Router, type IRouter } from "express";
import healthRouter from "./health";
import workforceValidationRouter from "./workforce-validation";

const router: IRouter = Router();

router.use(healthRouter);
router.use(workforceValidationRouter);

export default router;
