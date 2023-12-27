import { IRecipe } from "../models/IRecipe";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  GOTALLRECIPES,
  TOGGLEHEART,
}

export const RecipeReducer = (state: IRecipe[], action: IAction) => {
  switch (action.type) {
    case ActionType.GOTALLRECIPES: {
      console.log(state);

      return JSON.parse(action.payload);
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
              ...recipe.allIngredients,
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
