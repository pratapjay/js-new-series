console.log(Math);

// This is used for convert value negative to positive. 
console.log(Math.abs(-6))

// Rounding numbers makes them 'easier' to use or understand whilst also keeping the number close to its original value
console.log(Math.round(4.6));

// ceil value is a top value
console.log(Math.ceil(4.1))

// floor value is a bottom value
console.log(Math.floor(4.9))

// for minimum value
console.log(Math.min(3,1,2,4,5,6,9))

// for maximum value
console.log(Math.max(9,8,5,2,7,0,78))


// for generate random value 
console.log(Math.random());  // this will give value under (0-1)

console.log((Math.random()*10)+1);

// This is give value between range
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);