import { RecipeContext } from "../../contexts/RecipeContext";
import { useEffect, useReducer } from "react";
import { ShowOneRecipe } from "../ShowOneRecipe";
import { getAllRecipes } from "../../services/RecipeApi";
import { RecipeDispatchContext } from "../../contexts/RecipeDispatchContext";
import { ActionType, RecipeReducer } from "../../reducers/RecipeReducer";

export const OneRecipe = () => {
  const [recipe, dispatch] = useReducer(RecipeReducer, []);

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
      <RecipeContext.Provider value={recipe}>
        <RecipeDispatchContext.Provider value={dispatch}>
          <ShowOneRecipe></ShowOneRecipe>
        </RecipeDispatchContext.Provider>
      </RecipeContext.Provider>
    </>
  );
};
