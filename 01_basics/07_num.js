const score = 400
console.log(score);

// This is the another way to initialize the number
const newNumber = new Number(100)
console.log(newNumber);

// Change number into string
console.log(newNumber.toString().length)

// Fixed value after decimal
console.log(newNumber.toFixed(2))  


// this is precision value
const anotherNumber = 123.899
console.log(anotherNumber.toPrecision(3)); 

// for Comma 
const hundred = 10000000
console.log(hundred.toLocaleString('en-IN')); // this is for indian rupee
console.log(hundred.toLocaleString()); // This is for USA Standard

 