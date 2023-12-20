import { useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import axios from "axios";

export const useGetRecipesLS = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const recipesInLS = localStorage.getItem("recipes");

    if (recipesInLS) {
      setRecipes(JSON.parse(recipesInLS));
    } else {
      axios
        .get<IRecipe[]>("http://localhost:4000/api/v1/recipe")
        .then((response) => {
          setRecipes(response.data);
          localStorage.setItem("recipes", JSON.stringify(response.data));
        });
    }
  }, []);
  console.log(recipes);
  return recipes;
};
