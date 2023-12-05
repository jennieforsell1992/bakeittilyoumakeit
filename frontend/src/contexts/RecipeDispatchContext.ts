import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/RecipeReducer";

export const RecipeDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
