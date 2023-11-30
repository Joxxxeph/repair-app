const express = require("express");

const {
  findAllRepairs,
  createRepair,
  findOneRepair,
  updateRepair,
  deleteOneRepair,
} = require("./repairs.controller.js");

const router = express.Router();

// endpoint to search all users
router.get("/repairs", findAllRepairs);

//endpoint to create all users

router.post('/repairs', createRepair);

//endpoint to search for a specific user

router.get("/repairs/:id", findOneRepair);

//endpoint to update a user

router.patch("/repairs/:id", updateRepair);

//endpoint to delete a user

router.delete("/repairs/:id", deleteOneRepair);

module.exports = router;
