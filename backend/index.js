import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import cors from "cors"
// config.js or app.js or index.js
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Now you can access your environment variables
const mongoDBURL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8000;
const app = express();
// console.log(mongoDBURL)
//cors error
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
}))
//middleware to parse req
app.use(express.json());
//middleware to hande booksRoute
app.use("/books", booksRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Welcome to Book Store");
    });
    console.log("App is connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT} `);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });
