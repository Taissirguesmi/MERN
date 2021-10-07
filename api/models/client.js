const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  idCli: { type: Number, required: true },
  nomCli: { type: String, required: true },
  prenomCli: { type: String, required: true },
  tel: { type: String, required: true },
});

module.exports = mongoose.model("client", clientSchema);
