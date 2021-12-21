const mongoose = require('mongoose');

const { Schema } = mongoose;

const spendSchema = new Schema({
    where: String,
    howMuch: String
});

module.exports = Spend = mongoose.model('spends', spendSchema);