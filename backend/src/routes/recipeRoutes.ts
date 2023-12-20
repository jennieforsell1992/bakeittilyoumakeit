import { Router } from "express";
import {
  createNewRecipe,
  getAllRecipes,
  updateRecipe,
} from "../controllers/recipeControllers";
import uploadMulterMiddleware from "../middleware/multer";

const router: Router = Router();

router.post("/", uploadMulterMiddleware, createNewRecipe);
router.get("/", getAllRecipes);
router.put("/:id", updateRecipe);

export default router;
