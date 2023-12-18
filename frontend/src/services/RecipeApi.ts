import axios from "axios";
import { IRecipe } from "../models/IRecipe";

export const getAllRecipes = async () => {
  const response = await axios.get<IRecipe[]>(
    // "http://localhost:4000/api/v1/recipe"
    "https://bakeittilyoumakeit.vercel.app"
  );

  localStorage.setItem("recipes", JSON.stringify(response.data));

  return response.data;
};

export const createNewRecipe = async (recipe: FormData): Promise<IRecipe> => {
  console.log(recipe);
  const response = await axios.post<IRecipe>(
    // "http://localhost:4000/api/v1/recipe",
    "https://bakeittilyoumakeit.vercel.app",
    recipe
  );

  console.log(response.data);
  return response.data;
};
