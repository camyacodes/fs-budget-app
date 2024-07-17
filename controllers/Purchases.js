// individual router methods for blog url
const purchasesRouter = require('express').Router()
const Purchase = require('../models/purchase')

// Find all purchases
purchasesRouter.get('/', async (request, response) => {
  const purchases = await Purchase.find({})

  response.json(purchases)
})

// Add a purchase
purchasesRouter.post('/', async (request, response) => {
  const body = request.body

  const purchase = new Purchase({
    date: Date(),
    place: body.place,
    category: body.category,
    amount: body.amount,
  })

  const savedPurchase = await purchase.save()

  response.status(201).json(savedPurchase)
})

module.exports = purchasesRouter
