import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import recipeRoutes from "./src/routes/recipeRoutes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`processing ${req.method} request to ${req.path}`);
  console.log(req.path);
  next();
});

app.use(
  cors({
    origin: "https://bakeittilyoumakeit.vercel.app",
    methods: ["GET", "POST"],
  })
);

app.use("/api/v1/recipe", recipeRoutes);

app.use((req, res) => {
  const isApiPath = req.path.startsWith("/api/");

  if (isApiPath) return res.sendStatus(404);

  return;
});

const port = process.env.PORT || 3000;
const mongoDbUrl = process.env.MONGODB_URI;
const url = "https://bakeittilyoumakeit.vercel.app";

async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(mongoDbUrl || "");

    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
run();

export default run;
