const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema({
  idCat: { type: Number, required: true },
  nomCat: { type: String, required: true },
});

module.exports = mongoose.model("categorie", categorieSchema);
