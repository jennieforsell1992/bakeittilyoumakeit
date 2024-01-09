import { ChangeEvent, useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { ActionType } from "../reducers/RecipeReducer";
import { IoMdHeart } from "react-icons/io";

export const ShowSearchRecipe = () => {
  const recipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);
  const navigate = useNavigate();
  const [searchRecipes, setSearchRecipes] = useState("");

  console.log(recipes);

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
  const handleClickHeartSearch = (id: string) => {
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });
  };

  return (
    <div className="searchRecipe">
      <article className="search-recipe-title-wrapper">
        <div className="search-recipe-title">
          <h3 className="search-text-title">sök på ditt favorit-recept</h3>
        </div>
      </article>

      <div className="search-recipe-input">
        <input
          className="search-input"
          type="text"
          onChange={handleSearch}
          value={searchRecipes}
          placeholder="skriv ditt sökord här🔎...."
        />
      </div>
      {searchRecipes !== "" && (
        <div className="searchRecipe-container">
          {filteredRecipes.map((rec, index) => (
            <div
              onClick={() => {
                handleNavigateToOneRecipe(rec._id);
              }}
              className="searchRecipe-wrapper"
              key={index}
            >
              <div className="searchRecipe-wrapper-img">
                <img
                  className="searchRecipe-img"
                  src={rec.imgUrl}
                  alt={rec.name}
                />
                <div
                  className="icon-wrapper-searchRecipe"
                  onClick={(e) => {
                    e.stopPropagation(), handleClickHeartSearch(rec._id);
                  }}
                >
                  <IoMdHeart
                    className={
                      rec.likedRecipe
                        ? "material-symbols-outlined liked"
                        : "material-symbols-outlined"
                    }
                  />
                </div>
              </div>
              <div className="searchRecipe-wrapper-nameWrapper">
                <p className="searchRecipe-name">{rec.name}</p>
                <p className="searchRecipe-bakingTime">{rec.bakingTime}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
