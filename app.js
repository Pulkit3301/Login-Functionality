const express = require("express");
const path = require("path");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "static")));
app.post("/api/register", async (req, res) => {
  console.log(req.body);
});
const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log("Server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};
start();
