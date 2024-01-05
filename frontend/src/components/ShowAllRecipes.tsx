import { useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import "../scss/showAllRecipes.scss";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { ActionType } from "../reducers/RecipeReducer";
import { IoMdHeart } from "react-icons/io";

export const ShowAllRecipes = () => {
  const allRecipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);

  console.log(allRecipes);

  const [isLiked, setIsLiked] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const handleClickHeart = (id: string) => {
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });

    setIsLiked(!isLiked);

    console.log(isLiked);
  };

  const sortRecipesA = () => {
    const sortData = [...allRecipes].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    dispatch({
      type: ActionType.GOTALLRECIPES,
      payload: JSON.stringify(sortData),
    });
  };

  const sortRecipesB = () => {
    const sortData = [...allRecipes].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });

    dispatch({
      type: ActionType.GOTALLRECIPES,
      payload: JSON.stringify(sortData),
    });
  };

  console.log(allRecipes);

  const showAllRecipes = allRecipes.map((res, index) => {
    return (
      <a
        href={`/allrecipes/${res._id}`}
        className="allRecipe-wrapper"
        key={index}
      >
        <div className="allRecipe-wrapper-img">
          <img className="allRecipe-img" src={res.imgUrl} alt={res.name} />
          <button
            className="icon-wrapper-allRecipes"
            onClick={(e) => {
              e.stopPropagation(),
                e.preventDefault(),
                handleClickHeart(res._id);
            }}
          >
            <IoMdHeart
              className={
                res.likedRecipe
                  ? "material-symbols-outlined liked"
                  : "material-symbols-outlined"
              }
            />
          </button>
        </div>
        <div className="allRecipe-wrapper-nameWrapper">
          <p className="allRecipe-name">{res.name}</p>
          <p className="allRecipe-bakingTime">{res.bakingTime}</p>
        </div>
      </a>
    );
  });

  return (
    <>
      <div className="sort-button-wrapper">
        <button
          className="sort-button-text"
          onClick={() => {
            setShowSort(!showSort);
          }}
        >
          Sortera recept
        </button>
      </div>
      {showSort ? (
        <div className="sort-button-options-wrapper">
          <div className="sort-buttons-options">
            <button className="sort-button-options-a" onClick={sortRecipesA}>
              a-ö
            </button>
            <button className="sort-button-options-b" onClick={sortRecipesB}>
              ö-a
            </button>
          </div>
        </div>
      ) : null}
      <div className="allRecipe-container">{showAllRecipes}</div>
    </>
  );
};
