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

  // const [recipeFromLSState, setRecipeFromLSState] = useState<IRecipe[]>([]);
  const [recipeFromLSStateNew, setRecipeFromLSStateNew] = useState<IRecipe[]>(
    []
  );

  // useEffect(() => {
  //   // const recipeFromLS = localStorage.getItem("recipe");
  //   const recipesFromLS = JSON.parse(localStorage.getItem("recipes") || "[]");
  //   console.log(recipesFromLS);

  //   // const recipeObject = JSON.parse(recipesFromLS);
  //   setRecipeFromLSState((prevRecipe) => [...prevRecipe, recipesFromLS]);
  // }, []);

  // console.log(recipeFromLSState);

  // const newListFromLS = recipeFromLSState.map((rec) => {
  //   return (
  //     <>
  //       <p>{rec.name}</p>
  //       <p>{rec.bakingTime}</p>
  //     </>
  //   );
  // });

  // console.log(newListFromLS);

  useEffect(() => {
    const recipesFromLSNew = JSON.parse(
      localStorage.getItem("recipes") || "[]"
    );
    console.log(recipesFromLSNew);

    setRecipeFromLSStateNew(recipesFromLSNew);
    // setRecipeFromLSStateNew((prevRecipe) => [...prevRecipe, recipesFromLSNew]);
  }, []);
  console.log(recipeFromLSStateNew);

  // const LSList = recipeFromLSStateNew.map((rec) => {
  //   <p>{rec.name}</p>;
  // });

  // console.log(LSList);

  // const newList = recipeFromLSState.map((rec) => {
  //   <>
  //     <p>{rec.name}</p>
  //   </>;
  // });

  // console.log(newList);

  // const newList = recipeFromLSStateNew.map((rec: IRecipe) => {
  //   if (rec.likedRecipe === true) {
  //     return (
  //       <>
  //         <p>{rec.name}</p>
  //       </>
  //     );
  //   }
  // });

  // console.log(newList);

  // const showRecipesFromLocalStorage = recipes.map((rec) => {
  //   if (recipeFromLSStateNew.filter((res) => res.likedRecipe !== true)) {
  //     return (
  //       <>
  //         <p>{rec.name}</p>
  //         <p>{rec.bakingTime}</p>
  //       </>
  //     );
  //   }
  // });

  // console.log(showRecipesFromLocalStorage);

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

      {/* <div>Gamla listan{newList}</div> */}

      {/* <div>{listFromLS}</div> */}
      {/* <p>{recipeFromLSState.name}</p>
      <p>{recipeFromLSState.bakingTime}</p> */}
    </>
  );
};
