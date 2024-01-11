import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./App.scss";
import { useEffect, useReducer } from "react";
import { ActionType, RecipeReducer } from "./reducers/RecipeReducer";
import { RecipeContext } from "./contexts/RecipeContext";
import { RecipeDispatchContext } from "./contexts/RecipeDispatchContext";
import { useGetRecipesLS } from "./hooks/useGetRecipesLS";

function App() {
  const [recipes, dispatch] = useReducer(RecipeReducer, []);
  const getDataFromLS = useGetRecipesLS();
  console.log(getDataFromLS);

  useEffect(() => {
    const getData = () => {
      dispatch({
        type: ActionType.GOTALLRECIPES,
        payload: JSON.stringify(getDataFromLS),
      });
    };

    console.log("Nu körs min getData", getData());
    getData();
  }, [getDataFromLS]);

  console.log(recipes);

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
