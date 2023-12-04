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
      <div key={index}>
        <p>{res.name}</p>
        <p>{res.allIngredients.IngredientOne}</p>
        <p>{res.description.descriptionOne}</p>
        <img src={res.imgUrl} alt={res.name} />
      </div>
    );
  });

  //   const showAllBookings = () =>{
  //     dispatch({
  //         type: ActionType.GOTALLRECIPES,
  //         payload:

  //     })
  //   }

  return <div>{showAllRecipes}</div>;
};
