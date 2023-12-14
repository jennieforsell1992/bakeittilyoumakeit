import { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";

export const ShowSearchRecipe = () => {
  const recipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);

  return (
    <>
      <input type="text" />
    </>
  );
};
