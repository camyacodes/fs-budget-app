const dummy = () => {
  return 1
}

const totalSpent = (purchases) => {
  // get amounts from all purchases and add them up into one total
  // purchases is an array of objects

  let sum = 0

  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].amount
  }

  return sum
}

const biggestPurchase = (purchases) => {
  let purchaseAmtArr = []

  for (let i = 0; i < purchases.length; i++) {
    purchaseAmtArr.push(purchases[i].amount)
  }

  return purchaseAmtArr.length === 0 ? 0 : Math.max(...purchaseAmtArr)
}

module.exports = { dummy, totalSpent, biggestPurchase }
