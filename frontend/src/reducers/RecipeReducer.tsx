import { IRecipe } from "../models/IRecipe";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  GOTALLRECIPES,
  CREATENEWRECIPE,
  TOGGLEHEART,
}

export const RecipeReducer = (state: IRecipe[], action: IAction) => {
  switch (action.type) {
    case ActionType.GOTALLRECIPES: {
      return JSON.parse(action.payload);
    }
    case ActionType.CREATENEWRECIPE: {
      return;
    }
    case ActionType.TOGGLEHEART: {
      return state.map((recipe) => {
        console.log(action.payload);
        if (recipe._id === action.payload) {
          return {
            ...state,
            _id: recipe._id,
            name: recipe.name,
            bakingTime: recipe.bakingTime,
            imgUrl: recipe.imgUrl,
            likedRecipe: !recipe.likedRecipe,
          };
        } else {
          return recipe;
        }
      });
    }
    default:
      break;
  }

  return state;
};
