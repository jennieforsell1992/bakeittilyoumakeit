import { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { useParams } from "react-router-dom";
import "../scss/showOneRecipe.scss";
import { IoMdHeart } from "react-icons/io";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { ActionType } from "../reducers/RecipeReducer";

export const ShowOneRecipe = () => {
  const recipes = useContext(RecipeContext);
  const dispatch = useContext(RecipeDispatchContext);

  const params = useParams();
  const id = params.id;
  console.log(id);

  const handleClickHeartOneRecipe = (id: string) => {
    dispatch({
      type: ActionType.TOGGLEHEART,
      payload: id,
    });
  };

  const oneRecipe = recipes.map((rec) => {
    if (rec._id === id) {
      return (
        <article className="oneRecipe-wrapper">
          <section className="oneRecipe-wrapper-title-baking-img">
            <h3 className="oneRecipe-title">{rec.name}</h3>
            <div className="oneRecipe-wrapper-schedule">
              <span className="material-symbols-outlined">schedule</span>{" "}
              <h4 className="oneRecipe-baking">{rec.bakingTime}</h4>
            </div>

            <div className="oneRecipe-wrapper-img">
              <img className="oneRecipe-img" src={rec.imgUrl} alt={rec.name} />
            </div>
          </section>
          <section className="oneRecipe-wrapper-icon-favorite">
            <div
              className="oneRecipe-icon-wrapper"
              onClick={() => {
                handleClickHeartOneRecipe(rec._id);
              }}
            >
              <p>Spara</p>
              <IoMdHeart
                className={rec.likedRecipe ? "heart-icon liked" : "heart-icon"}
              />
            </div>
          </section>

          <section className="oneRecipe-wrapper-ing-desc">
            <article className="oneRecipe-wrapper-allIngredients">
              <h4 className="oneRecipe-ingredient-title">ingredienser</h4>
              <p>{rec.allIngredients.IngredientOne}</p>
              <p>{rec.allIngredients.IngredientTwo}</p>
              <p>{rec.allIngredients.IngredientThree}</p>
              <p>{rec.allIngredients.IngredientFour}</p>
              <p>{rec.allIngredients.IngredientFive}</p>
              <p>{rec.allIngredients.IngredientSix}</p>
              <p>{rec.allIngredients.IngredientSeven}</p>
              <p>{rec.allIngredients.IngredientEight}</p>
              <p>{rec.allIngredients.IngredientNine}</p>
              <p>{rec.allIngredients.IngredientTen}</p>
              <p>{rec.allIngredients.IngredientEleven}</p>
              <p>{rec.allIngredients.IngredientTwelve}</p>
              <p>{rec.allIngredients.IngredientThirteen}</p>
              <p>{rec.allIngredients.IngredientFourteen}</p>
            </article>
            <article className="oneRecipe-wrapper-description">
              <h4 className="oneRecipe-desc-title">Gör såhär</h4>
              <p>{rec.description.descriptionOne}</p>
              <p>{rec.description.descriptionTwo}</p>
              <p>{rec.description.descriptionThree}</p>
              <p>{rec.description.descriptionFour}</p>
              <p>{rec.description.descriptionFive}</p>
              <p>{rec.description.descriptionSix}</p>
              <p>{rec.description.descriptionSeven}</p>
              <p>{rec.description.descriptionEight}</p>
              <p>{rec.description.descriptionNine}</p>
              <p>{rec.description.descriptionTen}</p>
              <p>{rec.description.descriptionEleven}</p>
              <p>{rec.description.descriptionTwelve}</p>
              <p>{rec.description.descriptionThirteen}</p>
              <p>{rec.description.descriptionFourteen}</p>
              <p>{rec.description.descriptionFifteen}</p>
              <p>{rec.description.descriptionSixteen}</p>
            </article>
          </section>
        </article>
      );
    }
  });

  console.log("detta är mitt recept på OneRecipe", recipes);

  return (
    <>
      <div>{oneRecipe}</div>
    </>
  );
};
