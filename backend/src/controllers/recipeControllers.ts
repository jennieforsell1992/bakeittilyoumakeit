import { RequestHandler } from "express";
import { Recipe } from "../models/IRecipe";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

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

    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Sorry, couldn't upload the image");
      }
      const newRecipe = await Recipe.create({
        likedRecipe,
        imgUrl,
        name,
        bakingTime,
        description,
        allIngredients,
        image: {
          filename: req.file?.filename || "",
          path: req.file?.path || "",
        },
      });

      return res.status(201).json(newRecipe);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't create a new recipe");
  }
};

//     const newRecipe = await Recipe.create({
//       likedRecipe: likedRecipe,
//       imgUrl: imgUrl,
//       name: name,
//       bakingTime: bakingTime,
//       description: description,
//       allIngredients: allIngredients,
//       image: {
//         filename: req.file?.filename || '',
//         path: req.file?.path || '',
//       },
//     });

//     return res.status(201).json(newRecipe);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json("Sorry, couldn't create a new recipe");
//   }
// };

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
