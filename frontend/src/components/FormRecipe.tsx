import { ChangeEvent, FormEvent, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { createNewRecipe } from "../services/RecipeApi";

export const FormRecipe = () => {
  const [newRecipe, setNewRecipe] = useState<IRecipe>({
    _id: "",
    likedRecipe: false,
    imgUrl: "",
    name: "",
    bakingTime: "",
    description: {
      descriptionOne: "",
      descriptionTwo: "",
      descriptionThree: "",
      descriptionFour: "",
      descriptionFive: "",
      descriptionSix: "",
      descriptionSeven: "",
      descriptionEight: "",
      descriptionNine: "",
      descriptionTen: "",
      descriptionEleven: "",
      descriptionTwelve: "",
      descriptionThirteen: "",
      descriptionFourteen: "",
      descriptionFifteen: "",
      descriptionSixteen: "",
    },
    allIngredients: {
      IngredientOne: "",
      IngredientTwo: "",
      IngredientThree: "",
      IngredientFour: "",
      IngredientFive: "",
      IngredientSix: "",
      IngredientSeven: "",
      IngredientEight: "",
      IngredientNine: "",
      IngredientTen: "",
      IngredientEleven: "",
      IngredientTwelve: "",
      IngredientThirteen: "",
      IngredientFourteen: "",
    },
  });

  const handleChangeRecipe = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleChangeRecipeIngredients = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setNewRecipe({
      ...newRecipe,
      allIngredients: { ...newRecipe.allIngredients, [name]: value },
    });
  };

  const handleChangeRecipeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setNewRecipe({
      ...newRecipe,
      description: { ...newRecipe.description, [name]: value },
    });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    const name = e.target.name;

    console.log(newRecipe.imgUrl);

    setNewRecipe({
      ...newRecipe,
      [name]: file,
    });
  };

  const handleSubmitRecipe = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", newRecipe._id || "");
    formData.append("name", newRecipe.name || "");
    formData.append("bakingTime", newRecipe.bakingTime || "");

    formData.append("likedRecipe", newRecipe.likedRecipe.toString() || "");

    formData.append("imgUrl", newRecipe.imgUrl || "");

    Object.entries(newRecipe.description).forEach(([key, value]) => {
      formData.append(`description[${key}]`, value);
    });

    Object.entries(newRecipe.allIngredients).forEach(([key, value]) => {
      formData.append(`allIngredients[${key}]`, value);
    });

    console.log(formData);

    createNewRecipe(formData);
  };

  return (
    <div className="wrapper-form-title">
      <div className="title-form-wrapper">
        <h3>Skapa nytt recept</h3>
      </div>
      <form
        onSubmit={handleSubmitRecipe}
        encType="multipart/form-data"
        className="form-wrapper"
      >
        <label className="wrapper-image-input">
          Välj bild
          <input
            className="image-input"
            type="file"
            name="imgUrl"
            accept=".png, .jpg"
            onChange={(e) => handleImage(e)}
          />
        </label>
        <section className="wrapper-name-bakingTime">
          <label>Vad heter bakelsen?</label>
          <input
            className="input-box"
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleChangeRecipe}
            required
          />
          <label>Hur lång tid tar det?</label>
          <input
            className="input-box"
            type="text"
            name="bakingTime"
            value={newRecipe.bakingTime}
            onChange={handleChangeRecipe}
            required
          />
        </section>
        <section className="wrapper-ingredients">
          <div className="wrapper-ingredients-title">
            <h3 className="ingredients-info-text">
              skriv in varje ingrediens i de olika fälten och de olika måten
            </h3>
            <p>t.ex 1dl mjölk, 1tsk bakpulver</p>
          </div>
          {/*Ingredients*/}
          <label>ingrediens 1</label>
          <input
            className="input-box"
            type="text"
            name="IngredientOne"
            value={newRecipe.allIngredients.IngredientOne}
            onChange={handleChangeRecipeIngredients}
            required
          />
          <label>ingrediens 2</label>
          <input
            className="input-box"
            type="text"
            name="IngredientTwo"
            value={newRecipe.allIngredients.IngredientTwo}
            onChange={handleChangeRecipeIngredients}
            required
          />
          <label>ingrediens 3</label>
          <input
            className="input-box"
            type="text"
            name="IngredientThree"
            value={newRecipe.allIngredients.IngredientThree}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 4</label>
          <input
            className="input-box"
            type="text"
            name="IngredientFour"
            value={newRecipe.allIngredients.IngredientFour}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 5</label>
          <input
            className="input-box"
            type="text"
            name="IngredientFive"
            value={newRecipe.allIngredients.IngredientFive}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 6</label>
          <input
            className="input-box"
            type="text"
            name="IngredientSix"
            value={newRecipe.allIngredients.IngredientSix}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 7</label>
          <input
            className="input-box"
            type="text"
            name="IngredientSeven"
            value={newRecipe.allIngredients.IngredientSeven}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 8</label>
          <input
            className="input-box"
            type="text"
            name="IngredientEight"
            value={newRecipe.allIngredients.IngredientEight}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 9</label>
          <input
            className="input-box"
            type="text"
            name="IngredientNine"
            value={newRecipe.allIngredients.IngredientNine}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 10</label>
          <input
            className="input-box"
            type="text"
            name="IngredientTen"
            value={newRecipe.allIngredients.IngredientTen}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 11</label>
          <input
            className="input-box"
            type="text"
            name="IngredientEleven"
            value={newRecipe.allIngredients.IngredientEleven}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 12</label>
          <input
            className="input-box"
            type="text"
            name="IngredientTwelve"
            value={newRecipe.allIngredients.IngredientTwelve}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 13</label>
          <input
            className="input-box"
            type="text"
            name="IngredientThirteen"
            value={newRecipe.allIngredients.IngredientThirteen}
            onChange={handleChangeRecipeIngredients}
          />
          <label>ingrediens 14</label>
          <input
            className="input-box"
            type="text"
            name="IngredientFourteen"
            value={newRecipe.allIngredients.IngredientFourteen}
            onChange={handleChangeRecipeIngredients}
          />
        </section>
        <section className="wrapper-description">
          {/*Description*/}
          <h3>Stega upp hur man bakar ditt recept</h3>
          <p>t.ex sätt på ugnen på 200grader</p>
          <label>Steg 1</label>
          <input
            className="input-box"
            type="text"
            name="descriptionOne"
            value={newRecipe.description.descriptionOne}
            onChange={handleChangeRecipeDescription}
            required
          />
          <label>Steg 2</label>
          <input
            className="input-box"
            type="text"
            name="descriptionTwo"
            value={newRecipe.description.descriptionTwo}
            onChange={handleChangeRecipeDescription}
            required
          />
          <label>Steg 3</label>
          <input
            className="input-box"
            type="text"
            name="descriptionThree"
            value={newRecipe.description.descriptionThree}
            onChange={handleChangeRecipeDescription}
            required
          />
          <label>Steg 4</label>
          <input
            className="input-box"
            type="text"
            name="descriptionFour"
            value={newRecipe.description.descriptionFour}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 5</label>
          <input
            className="input-box"
            type="text"
            name="descriptionFive"
            value={newRecipe.description.descriptionFive}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 6</label>
          <input
            className="input-box"
            type="text"
            name="descriptionSix"
            value={newRecipe.description.descriptionSix}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 7</label>
          <input
            className="input-box"
            type="text"
            name="descriptionSeven"
            value={newRecipe.description.descriptionSeven}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 8</label>
          <input
            className="input-box"
            type="text"
            name="descriptionEight"
            value={newRecipe.description.descriptionEight}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 9</label>
          <input
            className="input-box"
            type="text"
            name="descriptionNine"
            value={newRecipe.description.descriptionNine}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 10</label>
          <input
            className="input-box"
            type="text"
            name="descriptionTen"
            value={newRecipe.description.descriptionTen}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 11</label>
          <input
            className="input-box"
            type="text"
            name="descriptionEleven"
            value={newRecipe.description.descriptionEleven}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 12</label>
          <input
            className="input-box"
            type="text"
            name="descriptionTwelve"
            value={newRecipe.description.descriptionTwelve}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 13</label>
          <input
            className="input-box"
            type="text"
            name="descriptionThirteen"
            value={newRecipe.description.descriptionThirteen}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 14</label>
          <input
            className="input-box"
            type="text"
            name="descriptionFourteen"
            value={newRecipe.description.descriptionFourteen}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 15</label>
          <input
            className="input-box"
            type="text"
            name="descriptionFifteen"
            value={newRecipe.description.descriptionFifteen}
            onChange={handleChangeRecipeDescription}
          />
          <label>Steg 16</label>
          <input
            className="input-box"
            type="text"
            name="descriptionSixteen"
            value={newRecipe.description.descriptionSixteen}
            onChange={handleChangeRecipeDescription}
          />
        </section>
        <div className="form-submit-button-wrapper">
          <button type="submit">Skicka upp ditt recept!</button>
        </div>
      </form>
    </div>
  );
};
