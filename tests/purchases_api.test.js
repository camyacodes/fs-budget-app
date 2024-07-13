const { test, after, beforeEach, describe } = require('node:test')
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
})

after(async () => {
  await mongoose.connection.close()
  await config.stopDb()
})
