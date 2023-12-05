import { IRecipe } from "../models/IRecipe";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  GOTALLRECIPES,
  CREATENEWRECIPE,
}

export const RecipeReducer = (state: IRecipe[], action: IAction) => {
  switch (action.type) {
    case ActionType.GOTALLRECIPES: {
      return JSON.parse(action.payload);
    }
    case ActionType.CREATENEWRECIPE: {
      return;
    }
    default:
      break;
  }

  return state;
};
