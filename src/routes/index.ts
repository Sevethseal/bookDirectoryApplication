import { Router } from "express";
import bookRoutes from "./books";

const router: Router = Router();

router.use(bookRoutes);
export default router;
