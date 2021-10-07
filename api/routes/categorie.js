const express = require("express");
const router = express.Router();
const categorie = require("../models/categorie");

router.get("/", (req, res, next) => {
  categorie
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
  const newCategorie = new categorie({
    idCat: req.body.idCat,
    nomCat: req.body.nomCat,
  });
  //res.status(201).json({ message: "products", newProduit: newProduit });
  newCategorie
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /categories",
        createdcategorie: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:idCat", (req, res, next) => {
  const id = req.params.idCat;
  categorie
    .find({ idCat: id })
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

router.put("/:idCat", function (req, res) {
  var CatId = req.params.idCat;
  categorie.findOneAndUpdate(
    { idCat: CatId },
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

router.delete("/:idCat", (req, res, next) => {
  const id = req.params.idCat;
  categorie
    .remove({ idCat: id })
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
