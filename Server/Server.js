const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Setup env variables
dotenv.config({
  path: "./.env",
});

// Configure CORS to allow requests from the frontend or different origin 
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

let Hostname = process.env.Hostname ;
let Port = process.env.Port ;
console.log(Port)
console.log(Hostname)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Used to connect Mongo with Express
mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(() => {
    console.log("MongoDB connection failed");
  });

// Importing routes
app.use("/api", require("./router/Productrouter"));

app.listen(Port, Hostname, () => {
  console.log(`Server is listening on port http://${Hostname}:${Port}`);
});
