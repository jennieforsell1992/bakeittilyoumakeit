import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Home } from "./components/pages/Home";
import { AllRecipes } from "./components/pages/AllRecipes";
import { CreateNewRecipe } from "./components/pages/CreateNewRecipe";
import { LikedRecipes } from "./components/pages/LikedRecipes";
import { SearchRecipe } from "./components/pages/SeachRecipe";
import { OneRecipe } from "./components/pages/OneRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home>, index: true },
      { path: "/allrecipes", element: <AllRecipes></AllRecipes> },
      { path: "/allrecipes/:id", element: <OneRecipe></OneRecipe> },
      {
        path: "/createnewrecipe",
        element: <CreateNewRecipe></CreateNewRecipe>,
      },
      { path: "/likedrecipe", element: <LikedRecipes></LikedRecipes> },
      { path: "/searchrecipe", element: <SearchRecipe></SearchRecipe> },
    ],
  },
]);
