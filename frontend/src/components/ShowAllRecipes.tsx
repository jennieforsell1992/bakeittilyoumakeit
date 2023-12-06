import { useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import "../scss/showAllRecipes.scss";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { ActionType } from "../reducers/RecipeReducer";

export const ShowAllRecipes = () => {
  const allRecipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);

  const [isLiked, setIsLiked] = useState(false);

  const likedHeartToggle = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  const handleClickHeart = (id: string) => {
    setIsLiked(!isLiked);
    console.log(isLiked);
    console.log(id);
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });
  };

  console.log(allRecipes);

  const showAllRecipes = allRecipes.map((res, index) => {
    return (
      <div className="allRecipe-wrapper" key={index}>
        <div className="allRecipe-wrapper-img">
          <img className="allRecipe-img" src={res.imgUrl} alt={res.name} />
        </div>
        <div className="allRecipe-wrapper-nameWrapper">
          <p className="allRecipe-name">{res.name}</p>
          <p className="allRecipe-bakingTime">{res.bakingTime}</p>
          <div
            className="icon-wrapper-allRecipes"
            onClick={() => {
              handleClickHeart(res._id);
            }}
          >
            <span
              className={
                res.likedRecipe
                  ? "material-symbols-outlined liked"
                  : "material-symbols-outlined"
              }
            >
              favorite
            </span>
          </div>
        </div>
      </div>
    );
  });

  return <div className="allRecipe-container">{showAllRecipes}</div>;
};
