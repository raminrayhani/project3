var express = require("express");

var itemsController = require("../controllers/itemsController");

var router = new express.Router();

// Get all items (or optionally a specific item with an id)
router.get("/items/:id?", itemsController.index);
// Create a new item using data passed in req.body
router.post("/items", itemsController.create);
// Update an existing item with a speicified id param, using data in req.body
router.patch("/items/:id", itemsController.update);
// Delete a specific item using the id in req.params.id
router.delete("/items/:id", itemsController.destroy);

module.exports = router;
