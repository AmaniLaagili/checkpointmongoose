const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonneOneSchema = new Schema({
    name: { type: String },
    prenon: { type: String },
    age: { type: Number, required: true },
    favoriteFoods: { type: Array },
});

module.exports = mongoose.model("PersonneOne", PersonneOneSchema);
