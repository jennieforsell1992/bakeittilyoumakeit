import { Schema, model } from "mongoose";
import { IIngredients } from "./IIngredients";
import { IDescription } from "./IDescription";

export interface IRecipe {
  likedRecipe: boolean;
  imgUrl: string;
  name: string;
  bakingTime: string;
  description: IDescription;
  allIngredients: IIngredients;
}

export const recipeSchema = new Schema<IRecipe>({
  likedRecipe: { type: Boolean, required: true },
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  bakingTime: { type: String, required: true },
  description: { type: {}, required: true },
  allIngredients: { type: {}, required: true },
});

export const Recipe = model<IRecipe>("Recipe", recipeSchema);
