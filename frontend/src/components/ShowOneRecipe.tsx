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
          <img src={rec.imgUrl} alt={rec.name} />
          <p>{rec.name}</p>
          <p>{rec.bakingTime}</p>

          <p>{rec.description.descriptionEight || undefined}</p>
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
