import { ChangeEvent, FormEvent, useState } from "react";
import { IRecipe } from "../models/IRecipe";
// import { ActionType } from "../reducers/RecipeReducer";
// import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
// import { createNewRecipe } from "../services/RecipeApi";
import axios from "axios";

export const FormRecipe = () => {
  // const dispatch = useContext(RecipeDispatchContext);

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

    // if (e.target.type === "text") {
    //   setNewRecipe((prevRecipe) => ({
    //     ...prevRecipe,
    //     [name]: value,
    //   }));
    // }

    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleChangeRecipeIngredients = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setNewRecipe({
      ...newRecipe,
      allIngredients: { ...newRecipe.allIngredients, [name]: value },
    });
    // setNewRecipe((prevRecipe) => ({
    //   ...prevRecipe,
    //   guest: { ...prevRecipe.allIngredients, [name]: value },
    // }));
  };

  const handleChangeRecipeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setNewRecipe({
      ...newRecipe,
      description: { ...newRecipe.description, [name]: value },
    });
    // setNewRecipe((prevRecipe) => ({
    //   ...prevRecipe,
    //   guest: { ...prevRecipe.description, [name]: value },
    // }));
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

    //description
    // formData.append(
    //   "descriptionOne",
    //   newRecipe.description.descriptionOne || ""
    // );
    // formData.append(
    //   "descriptionTwo",
    //   newRecipe.description.descriptionTwo || ""
    // );
    // formData.append(
    //   "descriptionThree",
    //   newRecipe.description.descriptionThree || ""
    // );
    // formData.append(
    //   "descriptionFour",
    //   newRecipe.description.descriptionFour || ""
    // );
    // formData.append(
    //   "descriptionFive",
    //   newRecipe.description.descriptionFive || ""
    // );
    // formData.append(
    //   "descriptionSix",
    //   newRecipe.description.descriptionSix || ""
    // );
    // formData.append(
    //   "descriptionSeven",
    //   newRecipe.description.descriptionSeven || ""
    // );
    // formData.append(
    //   "descriptionEight",
    //   newRecipe.description.descriptionEight || ""
    // );
    // formData.append(
    //   "descriptionNine",
    //   newRecipe.description.descriptionNine || ""
    // );
    // formData.append(
    //   "descriptionTen",
    //   newRecipe.description.descriptionTen || ""
    // );
    // formData.append(
    //   "descriptionEleven",
    //   newRecipe.description.descriptionEleven || ""
    // );
    // formData.append(
    //   "descriptionTwelve",
    //   newRecipe.description.descriptionTwelve || ""
    // );
    // formData.append(
    //   "descriptionThirteen",
    //   newRecipe.description.descriptionThirteen || ""
    // );
    // formData.append(
    //   "descriptionFourteen",
    //   newRecipe.description.descriptionFourteen || ""
    // );
    // formData.append(
    //   "descriptionFifteen",
    //   newRecipe.description.descriptionFifteen || ""
    // );
    // formData.append(
    //   "descriptionSixteen",
    //   newRecipe.description.descriptionSixteen || ""
    // );

    //allIngredients

    // formData.append(
    //   "IngredientOne",
    //   newRecipe.allIngredients.IngredientOne || ""
    // );
    // formData.append(
    //   "IngredientTwo",
    //   newRecipe.allIngredients.IngredientTwo || ""
    // );
    // formData.append(
    //   "IngredientThree",
    //   newRecipe.allIngredients.IngredientThree || ""
    // );
    // formData.append(
    //   "IngredientFour",
    //   newRecipe.allIngredients.IngredientFour || ""
    // );
    // formData.append(
    //   "IngredientFive",
    //   newRecipe.allIngredients.IngredientFive || ""
    // );
    // formData.append(
    //   "IngredientSix",
    //   newRecipe.allIngredients.IngredientSix || ""
    // );
    // formData.append(
    //   "IngredientSeven",
    //   newRecipe.allIngredients.IngredientSeven || ""
    // );
    // formData.append(
    //   "IngredientEight",
    //   newRecipe.allIngredients.IngredientEight || ""
    // );
    // formData.append(
    //   "IngredientNine",
    //   newRecipe.allIngredients.IngredientNine || ""
    // );
    // formData.append(
    //   "IngredientTen",
    //   newRecipe.allIngredients.IngredientTen || ""
    // );
    // formData.append(
    //   "IngredientEleven",
    //   newRecipe.allIngredients.IngredientEleven || ""
    // );
    // formData.append(
    //   "IngredientTwelve",
    //   newRecipe.allIngredients.IngredientTwelve || ""
    // );
    // formData.append(
    //   "IngredientThirteen",
    //   newRecipe.allIngredients.IngredientThirteen || ""
    // );
    // formData.append(
    //   "IngredientFourteen",
    //   newRecipe.allIngredients.IngredientFourteen || ""
    // );

    console.log(formData.values);
    console.log(formData);

    // dispatch({ type: ActionType.CREATENEWRECIPE, payload: formData });
    // console.log(newRecipe);
    // createNewRecipe(formData);

    await axios
      .post<IRecipe>("http://localhost:4000/api/v1/recipe", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmitRecipe} encType="multipart/form-data">
        <input
          type="file"
          name="imgUrl"
          // accept=".png, .jpg"
          // value={newRecipe.imgUrl}
          onChange={(e) => handleImage(e)}
        />
        <p>Vad heter bakelsen?</p>
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChangeRecipe}
          required
        />
        <p>Hur lång tid tar det?</p>
        <input
          type="text"
          name="bakingTime"
          value={newRecipe.bakingTime}
          onChange={handleChangeRecipe}
          required
        />

        {/*Ingredients*/}
        <p>ingrediens 1</p>
        <input
          type="text"
          name="IngredientOne"
          value={newRecipe.allIngredients.IngredientOne}
          onChange={handleChangeRecipeIngredients}
          required
        />
        <p>ingrediens 2</p>
        <input
          type="text"
          name="IngredientTwo"
          value={newRecipe.allIngredients.IngredientTwo}
          onChange={handleChangeRecipeIngredients}
          required
        />
        <p>ingrediens 3</p>
        <input
          type="text"
          name="IngredientThree"
          value={newRecipe.allIngredients.IngredientThree}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 4</p>
        <input
          type="text"
          name="IngredientFour"
          value={newRecipe.allIngredients.IngredientFour}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 5</p>
        <input
          type="text"
          name="IngredientFive"
          value={newRecipe.allIngredients.IngredientFive}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 6</p>
        <input
          type="text"
          name="IngredientSix"
          value={newRecipe.allIngredients.IngredientSix}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 7</p>
        <input
          type="text"
          name="IngredientSeven"
          value={newRecipe.allIngredients.IngredientSeven}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 8</p>
        <input
          type="text"
          name="IngredientEight"
          value={newRecipe.allIngredients.IngredientEight}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 9</p>
        <input
          type="text"
          name="IngredientNine"
          value={newRecipe.allIngredients.IngredientNine}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 10</p>
        <input
          type="text"
          name="IngredientTen"
          value={newRecipe.allIngredients.IngredientTen}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 11</p>
        <input
          type="text"
          name="IngredientEleven"
          value={newRecipe.allIngredients.IngredientEleven}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 12</p>
        <input
          type="text"
          name="IngredientTwelve"
          value={newRecipe.allIngredients.IngredientTwelve}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 13</p>
        <input
          type="text"
          name="IngredientThirteen"
          value={newRecipe.allIngredients.IngredientThirteen}
          onChange={handleChangeRecipeIngredients}
        />
        <p>ingrediens 14</p>
        <input
          type="text"
          name="IngredientFourteen"
          value={newRecipe.allIngredients.IngredientFourteen}
          onChange={handleChangeRecipeIngredients}
        />

        {/*Description*/}
        <p>Stega upp hur man bakar ditt recept</p>
        <p>Steg 1</p>
        <input
          type="text"
          name="descriptionOne"
          value={newRecipe.description.descriptionOne}
          onChange={handleChangeRecipeDescription}
          required
        />
        <p>Steg 2</p>
        <input
          type="text"
          name="descriptionTwo"
          value={newRecipe.description.descriptionTwo}
          onChange={handleChangeRecipeDescription}
          required
        />
        <p>Steg 3</p>
        <input
          type="text"
          name="descriptionThree"
          value={newRecipe.description.descriptionThree}
          onChange={handleChangeRecipeDescription}
          required
        />
        <p>Steg 4</p>
        <input
          type="text"
          name="descriptionFour"
          value={newRecipe.description.descriptionFour}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 5</p>
        <input
          type="text"
          name="descriptionFive"
          value={newRecipe.description.descriptionFive}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 6</p>
        <input
          type="text"
          name="descriptionSix"
          value={newRecipe.description.descriptionSix}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 7</p>
        <input
          type="text"
          name="descriptionSeven"
          value={newRecipe.description.descriptionSeven}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 8</p>
        <input
          type="text"
          name="descriptionEight"
          value={newRecipe.description.descriptionEight}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 9</p>
        <input
          type="text"
          name="descriptionNine"
          value={newRecipe.description.descriptionNine}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 10</p>
        <input
          type="text"
          name="descriptionTen"
          value={newRecipe.description.descriptionTen}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 11</p>
        <input
          type="text"
          name="descriptionEleven"
          value={newRecipe.description.descriptionEleven}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 12</p>
        <input
          type="text"
          name="descriptionTwelve"
          value={newRecipe.description.descriptionTwelve}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 13</p>
        <input
          type="text"
          name="descriptionThirteen"
          value={newRecipe.description.descriptionThirteen}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 14</p>
        <input
          type="text"
          name="descriptionFourteen"
          value={newRecipe.description.descriptionFourteen}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 15</p>
        <input
          type="text"
          name="descriptionFifteen"
          value={newRecipe.description.descriptionFifteen}
          onChange={handleChangeRecipeDescription}
        />
        <p>Steg 16</p>
        <input
          type="text"
          name="descriptionSixteen"
          value={newRecipe.description.descriptionSixteen}
          onChange={handleChangeRecipeDescription}
        />

        <button type="submit">Skicka upp ditt recept!</button>
      </form>
    </>
  );
};
