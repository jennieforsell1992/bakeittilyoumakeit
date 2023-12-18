import { IRecipe } from "../models/IRecipe";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  GOTALLRECIPES,
  CREATENEWRECIPE,
  TOGGLEHEART,
}

export const RecipeReducer = (state: IRecipe[], action: IAction) => {
  switch (action.type) {
    case ActionType.GOTALLRECIPES: {
      // saveToLs(JSON.parse(action.payload));
      return JSON.parse(action.payload);
    }

    case ActionType.CREATENEWRECIPE: {
      const newRecipe: IRecipe = {
        _id: action.payload._id,
        likedRecipe: action.payload.likedRecipe,
        imgUrl: action.payload.imgUrl,
        name: action.payload.name,
        bakingTime: action.payload.bakingTime,

        description: {
          descriptionOne: action.payload.descriptionOne,
          descriptionTwo: action.payload.descriptionTwo,
          descriptionThree: action.payload.descriptionThree,
          descriptionFour: action.payload.descriptionFour,
          descriptionFive: action.payload.descriptionFive,
          descriptionSix: action.payload.descriptionSix,
          descriptionSeven: action.payload.descriptionSeven,
          descriptionEight: action.payload.descriptionEight,
          descriptionNine: action.payload.descriptionNine,
          descriptionTen: action.payload.descriptionTen,
          descriptionEleven: action.payload.descriptionEleven,
          descriptionTwelve: action.payload.descriptionTwelve,
          descriptionThirteen: action.payload.descriptionThirteen,
          descriptionFourteen: action.payload.descriptionFourteen,
          descriptionFifteen: action.payload.descriptionFifteen,
          descriptionSixteen: action.payload.descriptionSixteen,
        },
        allIngredients: {
          IngredientOne: action.payload.IngredientOne,
          IngredientTwo: action.payload.IngredientTwo,
          IngredientThree: action.payload.IngredientThree,
          IngredientFour: action.payload.IngredientFour,
          IngredientFive: action.payload.IngredientFive,
          IngredientSix: action.payload.IngredientSix,
          IngredientSeven: action.payload.IngredientSeven,
          IngredientEight: action.payload.IngredientEight,
          IngredientNine: action.payload.IngredientNine,
          IngredientTen: action.payload.IngredientTen,
          IngredientEleven: action.payload.IngredientEleven,
          IngredientTwelve: action.payload.IngredientTwelve,
          IngredientThirteen: action.payload.IngredientThirteen,
          IngredientFourteen: action.payload.IngredientFourteen,
        },
      };
      return [...state, newRecipe];
    }
    case ActionType.TOGGLEHEART: {
      return state.map((recipe) => {
        console.log(action.payload);

        // if (recipe.likedRecipe === false) {

        // storedRecipe.recipe = {
        //   ...storedRecipe.recipe,
        //   likedRecipe: true,
        // };

        // localStorage.setItem(
        //   "recipes",
        //   JSON.stringify({
        //     ...state,
        //     recipe: { ...recipe, likedRecipe: true },
        //   })
        // );
        // } else {
        //   localStorage.setItem(
        //     "recipe",
        //     JSON.stringify({
        //       ...state,
        //       recipe: { ...recipe, likedRecipe: false },
        //     })
        //   );
        // }

        if (recipe._id === action.payload) {
          console.log(state);

          const toggledLikedRecipe = {
            _id: recipe._id,
            likedRecipe: !recipe.likedRecipe,
            imgUrl: recipe.imgUrl,
            name: recipe.name,
            bakingTime: recipe.bakingTime,

            description: {
              descriptionOne: recipe.description.descriptionOne,
              descriptionTwo: recipe.description.descriptionTwo,
              descriptionThree: recipe.description.descriptionThree,
              descriptionFour: recipe.description.descriptionFour,
              descriptionFive: recipe.description.descriptionFive,
              descriptionSix: recipe.description.descriptionSix,
              descriptionSeven: recipe.description.descriptionSeven,
              descriptionEight: recipe.description.descriptionEight,
              descriptionNine: recipe.description.descriptionNine,
              descriptionTen: recipe.description.descriptionTen,
              descriptionEleven: recipe.description.descriptionEleven,
              descriptionTwelve: recipe.description.descriptionTwelve,
              descriptionThirteen: recipe.description.descriptionThirteen,
              descriptionFourteen: recipe.description.descriptionFourteen,
              descriptionFifteen: recipe.description.descriptionFifteen,
              descriptionSixteen: recipe.description.descriptionSixteen,
            },
            allIngredients: {
              IngredientOne: recipe.allIngredients.IngredientOne,
              IngredientTwo: recipe.allIngredients.IngredientTwo,
              IngredientThree: recipe.allIngredients.IngredientThree,
              IngredientFour: recipe.allIngredients.IngredientFour,
              IngredientFive: recipe.allIngredients.IngredientFive,
              IngredientSix: recipe.allIngredients.IngredientSix,
              IngredientSeven: recipe.allIngredients.IngredientSeven,
              IngredientEight: recipe.allIngredients.IngredientEight,
              IngredientNine: recipe.allIngredients.IngredientNine,
              IngredientTen: recipe.allIngredients.IngredientTen,
              IngredientEleven: recipe.allIngredients.IngredientEleven,
              IngredientTwelve: recipe.allIngredients.IngredientTwelve,
              IngredientThirteen: recipe.allIngredients.IngredientThirteen,
              IngredientFourteen: recipe.allIngredients.IngredientFourteen,
            },
          };

          console.log(toggledLikedRecipe);

          const storedRecipe = JSON.parse(
            localStorage.getItem("recipes") || "[]"
          );

          console.log("hämtar listan från localStorage", storedRecipe);

          const setRecipe = localStorage.setItem(
            "recipes",
            JSON.stringify({
              ...state,
              recipe: { ...recipe, likedRecipe: true },
            })
          );

          console.log("ändrade värdet till true på", setRecipe);

          //  const recipesInMongoDb = {...state, recipe: { ...recipe, likedRecipe: true }}

          // if (likedRecipe.likedRecipe === false) {
          // if (likedRecipe.likedRecipe === false) {
          //   localStorage.setItem(
          //     "recipe",
          //     JSON.stringify({ ...state, likedRecipe })
          //   );
          // } else {
          //   localStorage.setItem(
          //     "recipe",
          //     JSON.stringify({ ...state, likedRecipe: false })
          //   );
          // }

          // } else {
          //   console.log("nu är min likedrecipe omvandlad till false");
          //   localStorage.setItem(
          //     "recipe",
          //     JSON.stringify({ ...state, likedRecipe: false })
          //   );
          // }

          return toggledLikedRecipe;
        } else {
          return recipe;
        }
      });
    }
    default:
      break;
  }

  return state;
};

// const saveToLs = (recipes: IRecipe[]) => {
//   localStorage.setItem("recipes", JSON.stringify(recipes));
// };
