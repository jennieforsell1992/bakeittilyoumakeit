import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { ActionType } from "../reducers/RecipeReducer";
import { RecipeDispatchContext } from "../contexts/RecipeDispatchContext";
import { createNewRecipe } from "../services/RecipeApi";

export const FormRecipe = () => {
  const dispatch = useContext(RecipeDispatchContext);
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

  const handleSubmitRecipe = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: ActionType.CREATENEWRECIPE, payload: newRecipe });
    createNewRecipe(newRecipe);

    setNewRecipe({
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
  };

  const handleChangeRecipe = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    if (e.target.type === "text") {
      setNewRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: value,
      }));
    }

    if (e.target.type === "number") {
      setNewRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: +value,
      }));
    }
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const name = e.target.name;

    if (e.target.type === "file") {
      setNewRecipe((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(newRecipe.imgUrl);
  };

  return (
    <>
      <form onSubmit={handleSubmitRecipe} encType="multipart/form-data">
        <input
          type="file"
          name="imgUrl"
          // accept=".png, .jpg"
          value={newRecipe.imgUrl}
          onChange={handleImage}
        />
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChangeRecipe}
          required
        />

        <button type="submit">Spara bild</button>
      </form>
    </>
  );
};
