import { useEffect, useReducer } from "react";
import { getAllRecipes } from "../../services/RecipeApi";
import { ActionType, RecipeReducer } from "../../reducers/RecipeReducer";
import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeDispatchContext } from "../../contexts/RecipeDispatchContext";
import { ShowSearchRecipe } from "../ShowSearchRecipe";

export const SearchRecipe = () => {
  const [recipes, dispatch] = useReducer(RecipeReducer, []);

  useEffect(() => {
    const getData = async () => {
      const getAllDataFromApi = await getAllRecipes();

      dispatch({
        type: ActionType.GOTALLRECIPES,
        payload: JSON.stringify(getAllDataFromApi),
      });
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <RecipeContext.Provider value={recipes}>
        <RecipeDispatchContext.Provider value={dispatch}>
          <ShowSearchRecipe></ShowSearchRecipe>
        </RecipeDispatchContext.Provider>
      </RecipeContext.Provider>
    </>
  );
};
