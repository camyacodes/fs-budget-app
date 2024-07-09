// mongoose model and schema for mongodb
const mongoose = require('mongoose')

const totalsSchema = new mongoose.Schema({
  limit: Number,
  total_spent: Number,
})

const Totals = mongoose.model('Totals', totalsSchema)

module.exports = Totals
