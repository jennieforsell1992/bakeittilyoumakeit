import { Router } from "express";
import {
  createNewRecipe,
  getAllRecipes,
} from "../controllers/recipeControllers";

const router: Router = Router();

router.post("/", createNewRecipe);
router.get("/", getAllRecipes);

export default router;
