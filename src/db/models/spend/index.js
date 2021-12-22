const mongoose = require('mongoose');

const { Schema } = mongoose;

const spendSchema = new Schema({
  text: String,
  date: String,
  num: Number,
});

module.exports = Spend = mongoose.model('spends', spendSchema);
