import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import ruleRoutes from "./routes/rules.js";
import connectDb from "./DB/connection.js";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config({
  path: "./.env",
});

// Connect to MongoDB
// mongoose.connect(`${process.env.DATABASE_LINK}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// API routes
app.use("/api/rules", ruleRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, connectDb(), () =>
  console.log(`Server running on port ${PORT}`)
);
