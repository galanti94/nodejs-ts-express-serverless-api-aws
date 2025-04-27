import { Router } from "express";
import { rootController } from "../controllers/rootController";
import { testPostController } from "../controllers/testPostController";

const router = Router();

router.get('/', rootController);
router.post('/test-post', testPostController);

export default router;