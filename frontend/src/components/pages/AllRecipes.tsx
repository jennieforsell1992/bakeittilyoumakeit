import { useEffect, useReducer } from "react";
import { RecipeDispatchContext } from "../../contexts/RecipeDispatchContext";
import { RecipeReducer, ActionType } from "../../reducers/RecipeReducer";
import { ShowAllRecipes } from "../ShowAllRecipes";
import { getAllRecipes } from "../../services/RecipeApi";
import { RecipeContext } from "../../contexts/RecipeContext";

export const AllRecipes = () => {
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
          <ShowAllRecipes></ShowAllRecipes>
        </RecipeDispatchContext.Provider>
      </RecipeContext.Provider>
    </>
  );
};
