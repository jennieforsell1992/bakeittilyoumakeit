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

  const oneRecipe = recipes.map((rec, index) => {
    if (rec._id === id) {
      return (
        <article className="oneRecipe-wrapper" key={index}>
          <section className="oneRecipe-wrapper-title-baking-img">
            <h3 className="oneRecipe-title">{rec.name}</h3>
            <div className="oneRecipe-wrapper-schedule">
              <span className="material-symbols-outlined">schedule</span>{" "}
              <h4 className="oneRecipe-baking">{rec.bakingTime}</h4>
            </div>

            <div className="oneRecipe-wrapper-img">
              <img className="oneRecipe-img" src={rec.imgUrl} alt={rec.name} />
              <div
                className="oneRecipe-icon-wrapper"
                onClick={() => {
                  handleClickHeartOneRecipe(rec._id);
                }}
              >
                <p>Spara</p>
                <IoMdHeart
                  className={
                    rec.likedRecipe ? "heart-icon liked" : "heart-icon"
                  }
                />
              </div>
            </div>
          </section>

          <section className="oneRecipe-wrapper-ing-desc">
            <article className="oneRecipe-wrapper-allIngredients">
              <h4 className="oneRecipe-ingredient-title">ingredienser</h4>
              <ul className="showIngredients">
                <li>{rec.allIngredients.IngredientOne}</li>
                <li>{rec.allIngredients.IngredientTwo}</li>
                <li>{rec.allIngredients.IngredientThree}</li>
                <li>{rec.allIngredients.IngredientFour}</li>
                <li>{rec.allIngredients.IngredientFive}</li>
                <li>{rec.allIngredients.IngredientSix}</li>
                <li>{rec.allIngredients.IngredientSeven}</li>
                <li>{rec.allIngredients.IngredientEight}</li>
                <li>{rec.allIngredients.IngredientNine}</li>
                <li>{rec.allIngredients.IngredientTen}</li>
                <li>{rec.allIngredients.IngredientEleven}</li>
                <li>{rec.allIngredients.IngredientTwelve}</li>
                <li>{rec.allIngredients.IngredientThirteen}</li>
                <li>{rec.allIngredients.IngredientFourteen}</li>
              </ul>
            </article>
            <article className="oneRecipe-wrapper-description">
              <h4 className="oneRecipe-desc-title">Gör såhär</h4>
              <ul className="showDescription">
                <li>{rec.description.descriptionOne}</li>
                <li>{rec.description.descriptionTwo}</li>
                <li>{rec.description.descriptionThree}</li>
                <li>{rec.description.descriptionFour}</li>
                <li>{rec.description.descriptionFive}</li>
                <li>{rec.description.descriptionSix}</li>
                <li>{rec.description.descriptionSeven}</li>
                <li>{rec.description.descriptionEight}</li>
                <li>{rec.description.descriptionNine}</li>
                <li>{rec.description.descriptionTen}</li>
                <li>{rec.description.descriptionEleven}</li>
                <li>{rec.description.descriptionTwelve}</li>
                <li>{rec.description.descriptionThirteen}</li>
                <li>{rec.description.descriptionFourteen}</li>
                <li>{rec.description.descriptionFifteen}</li>
                <li>{rec.description.descriptionSixteen}</li>
              </ul>
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
