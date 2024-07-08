// create console log module so that you can change the hundreds of log statements in your code easily, for lets say
// collecting console logs and outputting to another program

const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = { info, error }
