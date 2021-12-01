const express = require("express");
const path = require("path");
const connectDB = require("./db/connect");
const user = require("./model/user");
const bcrypt = require("bcryptjs");

require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "static")));
app.post("/api/register", async (req, res) => {
  const { name, username, password: plainTextPassword, contact } = req.body;
  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid Username" });
  }
  if (!name || typeof name !== "string") {
    return res.json({ status: "error", error: "Invalid name" });
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }
  if (!contact || typeof contact !== "string") {
    return res.json({ status: "error", error: "Invalid contact" });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await user.create({
      name,
      username,
      password,
      contact,
    });
    console.log("User Created Successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username allready in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
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
