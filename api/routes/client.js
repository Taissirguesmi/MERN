const express = require("express");
const client = require("../models/client");
const router = express.Router();

router.get("/", (req, res, next) => {
  client
    .find()
    .exec()
    .then((items) => {
      console.log(items);
      res.status(200).json(items);
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
  const newClient = new client({
    idCli: req.body.idCli,
    nomCli: req.body.nomCli,
    prenomCli: req.body.prenomCli,
    tel: req.body.tel,
  });

  newClient
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /Clients",
        createdClient: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:idCli", (req, res, next) => {
  const id = req.params.idCli;
  client
    .find({ idCli: id })
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

router.put("/:idCli", function (req, res) {
  var CliId = req.params.idCli;
  client.findOneAndUpdate(
    { idCli: CliId },
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

router.delete("/:idCli", (req, res, next) => {
  const id = req.params.idCli;
  client
    .remove({ idCli: id })
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
