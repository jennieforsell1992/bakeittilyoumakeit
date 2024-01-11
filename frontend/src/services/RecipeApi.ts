import axios from "axios";
import { IRecipe } from "../models/IRecipe";

export const createNewRecipe = async (recipe: FormData): Promise<IRecipe> => {
  console.log(recipe);
  const response = await axios.post<IRecipe>(
    "https://bakeittilyoumakeit.vercel.app/api/v1/recipe",

    recipe
  );

  console.log(response.data);
  return response.data;
};
