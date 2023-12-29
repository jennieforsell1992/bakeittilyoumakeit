import { useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import axios from "axios";

export const useGetRecipesLS = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const recipesInLS = localStorage.getItem("recipes");

    if (recipesInLS) {
      axios
        .get<IRecipe[]>("https://bakeittilyoumakeit.vercel.app/api/v1/recipe")
        .then((response) => {
          const newRecipes = response.data;
          console.log(newRecipes);

          const parseLs = JSON.parse(recipesInLS);
          console.log(parseLs);

          const localStorageIds = parseLs.map((rec: IRecipe) => rec._id);
          const idFromMongoDb = newRecipes.map((rec) => rec._id);

          const missingObjects = idFromMongoDb.filter(
            (id) => !localStorageIds.includes(id)
          );

          if (missingObjects.length > 0) {
            const updatedRecipes = [
              ...parseLs,
              ...newRecipes.filter((rec) => missingObjects.includes(rec._id)),
            ];
            setRecipes(updatedRecipes);
            localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
          } else {
            setRecipes(parseLs);
          }
        });
    } else {
      axios
        .get<IRecipe[]>("https://bakeittilyoumakeit.vercel.app/api/v1/recipe")
        .then((response) => {
          setRecipes(response.data);
          localStorage.setItem("recipes", JSON.stringify(response.data));
        });
    }
  }, []);
  console.log(recipes);
  return recipes;
};
