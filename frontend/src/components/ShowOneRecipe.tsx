import { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

import { useParams } from "react-router-dom";

export const ShowOneRecipe = () => {
  const recipes = useContext(RecipeContext);

  const params = useParams();
  const id = params.id;
  console.log(id);

  const oneRecipe = recipes.map((rec) => {
    if (rec._id === id) {
      return (
        <article>
          <p>{rec.name}</p>
          <p>{rec.bakingTime}</p>
          <img src={rec.imgUrl} alt={rec.name} />
          <p>{rec.description.descriptionEight}</p>
        </article>
      );
    }
  });

  console.log("detta är mitt recept på OneRecipe", recipes);

  // }

  return (
    <>
      <div>{oneRecipe}</div>
    </>
  );
};
