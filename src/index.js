// approach :-1/..where we will write all the code in 1 module(index.js)
//in this the route and the connection of the database done in this single file only

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// ➡️ Add a test route so we can confirm server works
app.get("/", (req, res) => {
  res.send("Hello, Express is running ✅");
});

//connecting tyhe server
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("✅ Successfully connected to the database");

    // ✅ Start server
    const server = app.listen(process.env.PORT, () => {
      console.log(`🚀 App is listening on port ${process.env.PORT}`);
    });

    // ✅ Handle server errors
    server.on("error", (error) => {
      console.error(" Server error:", error);
    });
  } catch (error) {
    console.error("❌ ERROR:", error);
    process.exit(1);
  }
})();

*/


//Approach-2
//connecting to the database in another folder and import to the main file ,so easy to debug.and adding route in this folder

import dotenv from"dotenv"
import connectDB from "./db/index.js";
import express, { json } from "express";
import { DB_NAME } from "./constants.js";
import userRoutes from "./routes/user_routes.js"; // ✅ correct import


dotenv.config();

const app=express();
app.use(express.json()); //parse json //middleware

// Use the routes
app.use("/users", userRoutes);// all routes in user.routes.js will start with /users//middleware

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running on port:-:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed!!",error);
})
