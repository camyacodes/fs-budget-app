const { test, after, beforeEach } = require('node:test')
const Purchase = require('../models/purchase')
const assert = require('assert')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const config = require('../utils/config')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

beforeEach(async () => {
  await Purchase.deleteMany({})
  await Purchase.insertMany(helper.initialPurchases)
})

test('all notes are returned', async () => {
  const purchases = await helper.purchasesInDb()
  const response = await api.get('/api/purchases')
  assert.strictEqual(response.body.length, purchases.length)
})

test('id field is named id', async () => {
  const response = await api.get('/api/purchases')
  const purchase = response.body[0]
  assert.ok(purchase.id) // Check that the id field exists
  assert.strictEqual(purchase._id, undefined) // Check that the _id field does not exist
})

test('a purchase is created', async () => {
  const purchase = {
    place: 'CVS',
    category: 'Toiletries',
    amount: 62,
  }
  await api
    .post('/api/purchases')
    .send(purchase)
    .expect(201)
    .expect('Content-Type', /application\/json/)
  const purchases = await helper.purchasesInDb()
  console.log(purchases)
  assert.strictEqual(purchases.length, helper.initialPurchases.length + 1)
})

test('missing field throws and error', async () => {
  const badPurchase = {
    category: 'Toiletries',
    amount: 62,
  }
  await api.post('/api/purchases', badPurchase).expect(400)
})

after(async () => {
  await mongoose.connection.close()
  await config.stopDb()
})
