const { test, describe } = require('node:test')
const assert = require('node:assert')

const listHelper = require('../utils/list_helper')

// test('dummy returns 1', () => {
//   const purchases = []

//   const result = listHelper.dummy(purchases)
//   assert.strictEqual(result, 1)
// })

const emptyList = []

const listWithOnePurchase = [
  {
    _id: '668dc1a25474211e0d7a762f',
    date: '2024-07-09T23:02:58.000Z',
    place: 'Pet Store',
    category: 'Pet Food',
    amount: 20,
    __v: 0,
  },
]

const listWithManyPurchases = [
  {
    _id: '668c9a98d6ee267b50b6f8f3',
    date: '2024-07-09T02:04:08.000Z',
    place: 'Grocery Store',
    category: 'Food',
    amount: 45.3,
    __v: 0,
  },
  {
    _id: '668c9c3985da422971585aeb',
    date: '2024-07-09T02:11:05.000Z',
    place: 'Gas Station',
    category: 'Transport',
    amount: 25,
    __v: 0,
  },
  {
    _id: '668dc1a25474211e0d7a762f',
    date: '2024-07-09T23:02:58.000Z',
    place: 'Pet Store',
    category: 'Pet Food',
    amount: 20,
    __v: 0,
  },
  {
    _id: '668dc1ad5474211e0d7a7631',
    date: '2024-07-09T23:03:09.000Z',
    place: 'Supermarket',
    category: 'Toiletries',
    amount: 12.3,
    __v: 0,
  },
  {
    _id: '668dc1b65474211e0d7a7633',
    date: '2024-07-09T23:03:18.000Z',
    place: 'Movie Theater',
    category: 'Fun Money',
    amount: 25,
    __v: 0,
  },
]

describe('total spent', () => {
  test('of an empty array is 0', () => {
    const result = listHelper.totalSpent(emptyList)

    assert.strictEqual(result, 0)
  })

  test('of one purchase equals the amount of that', () => {
    const result = listHelper.totalSpent(listWithOnePurchase)

    assert.strictEqual(result, 20)
  })

  test('of a bigger list is the correct amount', () => {
    const result = listHelper.totalSpent(listWithManyPurchases)

    assert.strictEqual(result, 127.6)
  })
})

describe('biggest purchase', () => {
  test('off an empty array is 0', (emptyList) => {
    const result = listHelper.biggestPurchase(emptyList)

    assert.strictEqual(result, 0)
  })

  test('of one purchase is the amount of that', () => {
    const result = listHelper.biggestPurchase(listWithOnePurchase)

    assert.strictEqual(result, 20)
  })

  test('of many purchases is the biggest amount', () => {
    const result = listHelper.biggestPurchase(listWithManyPurchases)

    assert.strictEqual(result, 45.3)
  })
})
