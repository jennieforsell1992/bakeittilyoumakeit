import { Router } from "express";
import {
  createNewRecipe,
  getAllRecipes,
} from "../controllers/recipeControllers";
import uploadMulterMiddleware from "../middleware/multer";

const router: Router = Router();

router.post("/", uploadMulterMiddleware, createNewRecipe);
router.get("/", getAllRecipes);

export default router;
