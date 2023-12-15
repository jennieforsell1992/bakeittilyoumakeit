import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./App.scss";
import { useEffect, useReducer } from "react";
import { ActionType, RecipeReducer } from "./reducers/RecipeReducer";
import { getAllRecipes } from "./services/RecipeApi";
import { RecipeContext } from "./contexts/RecipeContext";
import { RecipeDispatchContext } from "./contexts/RecipeDispatchContext";

function App() {
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
          <RouterProvider router={router} />
        </RecipeDispatchContext.Provider>
      </RecipeContext.Provider>
    </>
  );
}

export default App;
