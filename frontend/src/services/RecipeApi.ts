import axios from "axios";
import { IRecipe } from "../models/IRecipe";

export const getAllRecipes = async () => {
  const response = await axios.get<IRecipe[]>(
    "http://localhost:4000/api/v1/recipe"
    // "http://bakeittilyoumakeit-kkgz"
  );

  return response.data;
};

export const createNewRecipe = async (recipe: FormData): Promise<IRecipe> => {
  console.log(recipe);
  const response = await axios.post<IRecipe>(
    "http://localhost:4000/api/v1/recipe",
    // "http://bakeittilyoumakeit-kkgz",
    recipe
  );

  console.log(response.data);
  return response.data;
};
