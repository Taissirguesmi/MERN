const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
  idCom: { type: Number, required: true },
  date: { type: String, required: true },
  prixCom: { type: Number, required: true },
});

module.exports = mongoose.model("commande", CommandeSchema);
