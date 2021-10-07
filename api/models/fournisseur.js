const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fournisseurSchema = new Schema({
  idF: { type: Number, required: true },
  nomF: { type: String, required: true },
  prenomF: { type: String, required: true },
  telF: { type: String, required: true },
});

module.exports = mongoose.model("fournisseur", fournisseurSchema);
