import { useGetRecipesLS } from "../hooks/useGetRecipesLS";
import { IRecipe } from "../models/IRecipe";
import { updateRecipe } from "../services/RecipeApi";

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
      console.log(state);

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
      console.log(state);

      const newState = state.map((recipe) => {
        console.log(action.payload);

        if (recipe._id === action.payload) {
          console.log(state);

          const toggledLikedRecipe = {
            _id: recipe._id,
            likedRecipe: !recipe.likedRecipe,
            imgUrl: recipe.imgUrl,
            name: recipe.name,
            bakingTime: recipe.bakingTime,

            description: {
              ...recipe.description,
            },
            allIngredients: {
              ...recipe.description,
            },
          };

          console.log(toggledLikedRecipe);

          return toggledLikedRecipe;
        } else {
          return recipe;
        }
      });

      localStorage.setItem("recipes", JSON.stringify(newState));

      return newState;
    }

    default:
      break;
  }

  return state;
};
