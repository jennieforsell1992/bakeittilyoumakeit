import { RequestHandler } from "express";
import { Recipe } from "../models/IRecipe";

export const createNewRecipe: RequestHandler = async (req, res, next) => {
  try {
    const {
      likedRecipe,
      imgUrl,
      name,
      bakingTime,
      description,
      allIngredients,
    } = req.body;
    const newRecipe = await Recipe.create({
      likedRecipe: likedRecipe,
      imgUrl: imgUrl,
      name: name,
      bakingTime: bakingTime,
      description: description,
      allIngredients: allIngredients,
    });

    return res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't create a new recipe");
  }
};

export const getAllRecipes: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    const totalRecipes = await Recipe.countDocuments();
    return res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't get all recipes");
  }
};
