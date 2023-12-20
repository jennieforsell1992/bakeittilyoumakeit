import { useContext, useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { RecipeContext } from "../contexts/RecipeContext";
import { useGetRecipesLS } from "../hooks/useGetRecipesLS";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../reducers/RecipeReducer";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { RxCross2 } from "react-icons/rx";

export const ShowLikedRecipes = () => {
  const recipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);
  const navigate = useNavigate();

  console.log(recipes);

  const [recipeFromLS, setRecipeFromLS] = useState<IRecipe[]>([]);

  const getDataFromLs = useGetRecipesLS();

  console.log(getDataFromLs);

  useEffect(() => {
    setRecipeFromLS(getDataFromLs);
  }, [getDataFromLs, recipeFromLS]);
  console.log(recipeFromLS);

  const handleClickNavigateToOnePage = (id: string) => {
    navigate(`/allrecipes/${id}`);
  };

  const handleClickHeart = (id: string, i: number) => {
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });

    const recipeRemove = recipeFromLS.splice(i, 1);

    setRecipeFromLS(recipeRemove);
  };

  const newList = recipeFromLS.map((rec, index) => {
    if (rec.likedRecipe === true) {
      return (
        <article
          onClick={() => {
            handleClickNavigateToOnePage(rec._id);
          }}
          className="likedRecipe-wrapper"
          key={index}
        >
          <div className="likedRecipe-wrapper-img">
            <img className="likedRecipe-img" src={rec.imgUrl} alt={rec.name} />
            <div
              className="icon-wrapper-likedRecipe"
              onClick={(e) => {
                e.stopPropagation(), handleClickHeart(rec._id, index);
              }}
            >
              <RxCross2 className="material-symbols-outlined" />
            </div>
          </div>
          <div className="likedRecipe-wrapper-nameWrapper">
            <p className="likedRecipe-name">{rec.name}</p>
            <p className="likedRecipe-bakingTime">{rec.bakingTime}</p>
          </div>
        </article>
      );
    }
  });

  return (
    <>
      <div className="likedRecipe-container">{newList}</div>
    </>
  );
};
