import { IDescription } from "./IDescription";
import { IIngredients } from "./IIngredients";

export interface IRecipe {
  likedRecipe: boolean;
  imgUrl: string;
  name: string;
  bakingTime: string;
  description: IDescription;
  allIngredients: IIngredients;
}
