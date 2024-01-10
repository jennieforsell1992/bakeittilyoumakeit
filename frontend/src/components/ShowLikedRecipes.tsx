import { useContext, useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { RecipeContext } from "../contexts/RecipeContext";
import { useGetRecipesLS } from "../hooks/useGetRecipesLS";
import { ActionType } from "../reducers/RecipeReducer";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { RxCross2 } from "react-icons/rx";
import { IoMdHeart } from "react-icons/io";

export const ShowLikedRecipes = () => {
  const recipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);

  console.log(recipes);

  const [recipeFromLS, setRecipeFromLS] = useState<IRecipe[]>([]);

  const getDataFromLs = useGetRecipesLS();

  console.log(getDataFromLs);

  useEffect(() => {
    setRecipeFromLS(getDataFromLs);
  }, [getDataFromLs, recipeFromLS]);
  console.log(recipeFromLS);

  const removeLikedRecipe = (id: string, i: number) => {
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });

    const recipeRemove = recipeFromLS.splice(i, 1);

    setRecipeFromLS(recipeRemove);
  };

  const newList = recipeFromLS.map((rec, index) => {
    if (rec.likedRecipe === true)
      return (
        <a
          href={`/allrecipes/${rec._id}`}
          className="likedRecipe-wrapper"
          key={index}
        >
          <div className="likedRecipe-wrapper-img">
            <img className="likedRecipe-img" src={rec.imgUrl} alt={rec.name} />
            <button
              className="icon-wrapper-likedRecipe"
              onClick={(e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  removeLikedRecipe(rec._id, index);
              }}
            >
              <RxCross2 className="material-symbols-outlined" />
            </button>
          </div>
          <div className="likedRecipe-wrapper-nameWrapper">
            <p className="likedRecipe-name">{rec.name}</p>
            <p className="likedRecipe-bakingTime">{rec.bakingTime}</p>
          </div>
        </a>
      );
  });

  console.log(newList.length);

  return (
    <>
      <section className="liked-title">
        <div className="liked-wrapper-title">
          <div className="liked-border">
            <h3>
              Alla dina gillade recept!
              <IoMdHeart className="heart-icon-liked" />
            </h3>
          </div>
        </div>
      </section>
      <div className="likedRecipe-container">{newList}</div>
    </>
  );
};
