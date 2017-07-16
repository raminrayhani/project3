var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
  text: String,
  favorited: {
    type: Boolean,
    default: false
  }
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;