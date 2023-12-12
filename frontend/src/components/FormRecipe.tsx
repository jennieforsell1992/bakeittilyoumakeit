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

  const handleSubmitRecipe = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", newRecipe._id || "");
    formData.append("name", newRecipe.name || "");
    formData.append("bakingTime", newRecipe.bakingTime || "");

    formData.append("likedRecipe", newRecipe.likedRecipe.toString() || "");

    formData.append("imgUrl", newRecipe.imgUrl || "");

    // Object.entries(newRecipe.description).forEach(([desc, value]) => {
    //   formData.append(`description[${desc}]`, value);
    // });

    // Object.entries(newRecipe.allIngredients).forEach(([ing, value]) => {
    //   formData.append(`allIngredients[${ing}]`, value);
    // });
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
