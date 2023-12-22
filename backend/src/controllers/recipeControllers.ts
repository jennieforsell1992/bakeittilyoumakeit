import { RequestHandler } from "express";
import { Recipe } from "../models/IRecipe";
import dotenv from "dotenv";
dotenv.config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const createNewRecipe: RequestHandler = async (req, res, next) => {
  console.log("create new recipe ", req.file);

  try {
    const { likedRecipe, name, bakingTime, description, allIngredients } =
      req.body;

    const image = req.file?.path;

    const newRecipe = await Recipe.create({
      likedRecipe: likedRecipe,
      imgUrl: image,
      name: name,
      bakingTime: bakingTime,
      description: description,
      allIngredients: allIngredients,
    });
    if (req.file) {
      const imageToCloudinary = await cloudinary.uploader.upload(
        req.file?.path
      );
    }

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
