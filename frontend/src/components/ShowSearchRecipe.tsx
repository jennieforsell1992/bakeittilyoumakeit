import { ChangeEvent, useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { ActionType } from "../reducers/RecipeReducer";

export const ShowSearchRecipe = () => {
  const recipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);
  const navigate = useNavigate();
  const [searchRecipes, setSearchRecipes] = useState("");

  const handleNavigateToOneRecipe = (id: string) => {
    navigate(`/allrecipes/${id}`);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchRecipes(value);
  };
  console.log(searchRecipes);

  const filteredRecipes = recipes.filter(
    (rec) =>
      searchRecipes === "" ||
      rec.name.toLowerCase().includes(searchRecipes.toLowerCase())
  );
  const handleClickHeart = (id: string) => {
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });
  };

  return (
    <>
      <input type="text" onChange={handleSearch} value={searchRecipes} />

      {searchRecipes !== "" && (
        <div>
          {filteredRecipes.map((rec, index) => (
            <div
              onClick={() => {
                handleNavigateToOneRecipe(rec._id);
              }}
              className="allRecipe-wrapper"
              key={index}
            >
              <div className="allRecipe-wrapper-img">
                <img
                  className="allRecipe-img"
                  src={rec.imgUrl}
                  alt={rec.name}
                />
                <div
                  className="icon-wrapper-allRecipes"
                  onClick={() => {
                    handleClickHeart(rec._id);
                  }}
                >
                  <span
                    className={
                      rec.likedRecipe
                        ? "material-symbols-outlined liked"
                        : "material-symbols-outlined"
                    }
                  >
                    favorite
                  </span>
                </div>
              </div>
              <div className="allRecipe-wrapper-nameWrapper">
                <p className="allRecipe-name">{rec.name}</p>
                <p className="allRecipe-bakingTime">{rec.bakingTime}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
