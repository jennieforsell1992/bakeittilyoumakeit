import { RequestHandler } from "express";
import { Recipe } from "../models/IRecipe";

export const createNewRecipe: RequestHandler = async (req, res, next) => {
  console.log("create new recipe ", req.file);
  try {
    const { likedRecipe, name, bakingTime, description, allIngredients } =
      req.body;

    const image = req.file?.filename;

    if (!image) {
      return res.status(400).json("Image upload is required");
    }

    const newRecipe = await Recipe.create({
      likedRecipe: likedRecipe,
      imgUrl: image,
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
