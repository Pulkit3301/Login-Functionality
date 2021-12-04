const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
});
const model = mongoose.model("UserSchema", schema);
module.exports = model;
