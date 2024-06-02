import express from "express";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import Auth from "./routes/Auth.js";

const app = express();

const PORT = 8000;
const MONGOURI =
  "mongodb+srv://darsheelchudal11:darsheel@cluster0.i4rjtg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGOURI);

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to mongoose");
});

mongoose.connection.on("error", () => {
  console.log("Not connected to mongoose");
});

app.listen(PORT, () => {
  console.log(`Listening at PORT : ${PORT}`);
});

app.use("")
