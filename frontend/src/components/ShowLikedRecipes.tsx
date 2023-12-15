import { useContext, useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { RecipeContext } from "../contexts/RecipeContext";

export const ShowLikedRecipes = () => {
  //    const recipesFromLs =  JSON.parse(localStorage.getItem("recipes") || "[]");

  const recipes = useContext(RecipeContext);
  console.log(recipes);

  //   const [likedRecipes, setLikedRecipes] = useState<IRecipe[]>([]);

  //   useEffect(() => {
  const recipesFromLs = JSON.parse(localStorage.getItem("recipe") || "");
  console.log(recipesFromLs);
  //   setLikedRecipes((prevRecipe) => [...prevRecipe, recipesFromLs]);
  //   }, []);

  // setLikedRecipes([...likedRecipes, recipesFromLs]);

  //   console.log(likedRecipes);

  return <p>component gillade recept</p>;
};
