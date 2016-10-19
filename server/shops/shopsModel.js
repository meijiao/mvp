var mongoose = require('mongoose');

var shopsSchema = new mongoose.Schema({
  restaurant_name: String,
  logo: String,
  description: String,
  location: String,
  telephone: String,
  meal: String
});

var Shops = mongoose.model("Shops", shopsSchema);
module.exports = Shops;