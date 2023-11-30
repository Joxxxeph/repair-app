const express = require("express");

const {
  findAll,
  create,
  findOne,
  update,
  deleteOne,
} = require("./users.controller.js");

const router = express.Router();

// endpoint to search all users
router.get("/users", findAll);

//endpoint to create all users

router.post('/users', create);

//endpoint to search for a specific user

router.get("/users/:id", findOne);

//endpoint to update a user

router.patch("/users/:id", update);

//endpoint to delete a user

router.delete("/users/:id", deleteOne);

module.exports = router;
