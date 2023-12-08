import { Schema, model, Document } from "mongoose";
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
  likedRecipe: { type: Boolean, required: false },
  imgUrl: { type: String, required: false },
  name: { type: String, required: true },
  bakingTime: { type: String, required: false },
  description: { type: {}, required: false },
  allIngredients: { type: {}, required: false },
});

export const Recipe = model<IRecipe>("Recipe", recipeSchema);
