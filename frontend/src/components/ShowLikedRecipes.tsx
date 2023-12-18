import { useContext, useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { RecipeContext } from "../contexts/RecipeContext";

export const ShowLikedRecipes = () => {
  //    const recipesFromLs =  JSON.parse(localStorage.getItem("recipes") || "[]");

  const recipes = useContext(RecipeContext);
  console.log(recipes);

  //   const [likedRecipes, setLikedRecipes] = useState<IRecipe[]>([]);

  //   useEffect(() => {
  // const recipesFromLs = JSON.parse(localStorage.getItem("recipe") || "");
  // console.log(recipesFromLs);
  //   setLikedRecipes((prevRecipe) => [...prevRecipe, recipesFromLs]);
  //   }, []);

  // setLikedRecipes([...likedRecipes, recipesFromLs]);

  //   console.log(likedRecipes);

  const [recipeFromLSState, setRecipeFromLSState] = useState<IRecipe[]>([]);

  useEffect(() => {
    // const recipeFromLS = localStorage.getItem("recipe");
    const recipesFromLS = JSON.parse(localStorage.getItem("recipes") || "[]");
    console.log(recipesFromLS);

    // const recipeObject = JSON.parse(recipesFromLS);
    setRecipeFromLSState((prevRecipe) => [...prevRecipe, recipesFromLS]);
  }, []);

  console.log(recipeFromLSState);

  // const newListFromLS = recipeFromLSState.map((rec) => {
  //   return (
  //     <>
  //       <p>{rec.name}</p>
  //       <p>{rec.bakingTime}</p>
  //     </>
  //   );
  // });

  // console.log(newListFromLS);

  const showRecipesFromLocalStorage = recipes.map((rec) => {
    if (rec.likedRecipe === true) {
      return (
        <>
          <p>{rec.name}</p>
          <p>{rec.bakingTime}</p>
        </>
      );
    }
  });

  console.log(showRecipesFromLocalStorage);

  // const listFromLS = recipeFromLSState?.map((rec) => {
  //   return (
  //     <>
  //       <p>{rec.name}</p>
  //       <p>{rec.bakingTime}</p>
  //     </>
  //   );
  // });

  // console.log(listFromLS);

  // const fromLocalStorage = localStorage.getItem("recipe");

  // const parseLocalStorage = JSON.parse(fromLocalStorage);

  // recipeFromLSState.map((rec) => {
  //   return (
  //     <>
  //       {" "}
  //       <p>{rec.name}</p>
  //       <p>{rec.bakingTime}</p>
  //     </>
  //   );
  // });

  // if(recipesFromLs)

  return (
    <>
      <p>hejhej</p>

      <div>Gamla listan{showRecipesFromLocalStorage}</div>

      {/* <div>{listFromLS}</div> */}
      {/* <p>{recipeFromLSState.name}</p>
      <p>{recipeFromLSState.bakingTime}</p> */}
    </>
  );
};
