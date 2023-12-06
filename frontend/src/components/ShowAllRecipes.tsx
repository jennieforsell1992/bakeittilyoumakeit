import { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
// import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
// import { ActionType } from "../reducers/RecipeReducer";

export const ShowAllRecipes = () => {
  const allRecipes = useContext(RecipeContext);
  //   const dispatch = useContext(RecipeDispatchContext);

  console.log(allRecipes);

  const showAllRecipes = allRecipes.map((res, index) => {
    return (
      <div className="allRecipe-wrapper" key={index}>
        <div>
          <img src={res.imgUrl} alt={res.name} />
        </div>
        <div>
          <p className="allRecipe-wrapper__name">{res.name}</p>
          <p className="allRecipe-wrapper__name">{res.bakingTime}</p>
        </div>
      </div>
    );
  });

  return <div>{showAllRecipes}</div>;
};
