var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  description: String,
  favorited: {
    type: Boolean,
    default: false
  },
  imageUrl:String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;