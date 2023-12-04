import { createContext } from "react";
import { IRecipe } from "../models/IRecipe";

export const RecipeContext = createContext<IRecipe[]>([]);
