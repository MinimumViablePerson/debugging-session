// let myName = 'Nicolas'
// let myAge = 34

// let price = 21
// let discountedPrice = price * 0.2

// myAge++

// let message = `Hello, my name is ${myName} and I am ${myAge} years old`
// console.log(message)

let prices = [10, 5, 20, 30, 100, 200, 55, 50]

let lowPrices = []
let mediumPrices = []
let highPrices = []

for (let price of prices) {
  // "debugger" is a keyword that pauses the execution of the code
  // every time JS reaches this keyword, the code stops, and allows us to
  // inspect the value of the variables available in the console
  // This can be very helpful when tracking down bugs
  // Such as, when the loop is not working as expected
  debugger
  if (price < 50) {
    lowPrices.push(price)
  } else if (price > 50 && price < 100) {
    mediumPrices.push(price)
  } else {
    highPrices.push(price)
  }
}

let myName = 'Genc'
