const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  idP: { type: Number, required: true },
  lib: { type: String, required: true },
  quantite: { type: Number, required: true },
  dimention: { type: String, required: true },
  prix: { type: Number, required: true },
});

module.exports = mongoose.model("produit", productSchema);
