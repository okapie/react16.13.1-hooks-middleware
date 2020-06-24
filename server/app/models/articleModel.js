const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  text: String,
  date: String
});

ArticleSchema.methods.setDate = function() {
  this.date = moment().format("YYYY-MM-DD HH:mm:ss"); 
};

module.exports = mongoose.model("ArticleModel", ArticleSchema);
