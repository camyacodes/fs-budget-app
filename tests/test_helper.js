const Purchase = require('../models/purchase')

const initialPurchases = [
  {
    place: 'Grocery Store',
    category: 'Food',
    amount: 45.3,
  },
  {
    place: 'Gas Station',
    category: 'Transport',
    amount: 25,
  },
]

const purchasesInDb = async () => {
  const purchases = await Purchase.find({})
  return purchases.map((p) => p.toJSON())
}

module.exports = { initialPurchases, purchasesInDb }
