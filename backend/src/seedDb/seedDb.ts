require("dotenv").config();
import { Recipe } from "../models/IRecipe";
import { IRecipe } from "../models/IRecipe";
import mongoose from "mongoose";
import { mockRecipesData } from "./recipes";

const populateDbWithMockData = async (connectionString: string) => {
  try {
    mongoose.set("strictQuery", false);

    const conn = await mongoose.connect(connectionString);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Recipe.deleteMany();

    const res = await Recipe.create(mockRecipesData);

    console.log("Created:", res);

    console.log("Database successfully populated with test data");

    const recipesFromDb = await Recipe.find<IRecipe>();

    console.log(recipesFromDb);
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData(process.env.MONGODB_URI || "");
