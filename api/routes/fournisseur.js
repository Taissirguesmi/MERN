const express = require("express");
const fournisseur = require("../models/fournisseur");
const router = express.Router();

router.get("/", (req, res, next) => {
  fournisseur
    .find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const newFournisseur = new fournisseur({
    idF: req.body.idF,
    nomF: req.body.nomF,
    prenomF: req.body.prenomF,
    telF: req.body.telF,
  });

  newFournisseur
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /Fournisseurs",
        createdFournisseur: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:idF", (req, res, next) => {
  const id = req.params.idF;
  fournisseur
    .find({ idF: id })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:idF", function (req, res) {
  var FourId = req.params.idF;
  fournisseur.findOneAndUpdate(
    { idF: FourId },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
      res.json(doc);
    }
  );
});

router.delete("/:idF", (req, res, next) => {
  const id = req.params.idF;
  fournisseur
    .remove({ idF: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
