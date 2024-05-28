// array

const myArray = [0,1,2,3,4]
const newArray = new Array(1,2,5,6,7)
const anotherArray = ["jay", "Pratap"]

console.log(myArray.length)

// Array Method

// push operation
const myArray = [0,1,2,3,4]
myArray.push(9)
console.log(myArray)

//Pop operation
myArray.pop();
console.log(myArray);

// unshift operation
const myArr = [0,2,3,5,6,9];
myArr.unshift(9);
console.log(myArr);

//Shift operation
const myArr = [0,2,3,5,6,9]
myArr.shift()
console.log(myArr)

//includes operation
const myArr = [1,2,3,5,6,9]
console.log(myArr.includes(4))

// index operation
const myArr = [1,4,5,6,8]
console.log(myArr.indexOf(8))

// join 
const myArr = [1,4,5,6,8]
const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

// slice, splice
//slice
const myArr = [1,2,3,4,5,6]
console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log("B", myArr)
console.log(myn1)

//splice
const myArr = [1,2,3,4,5,6]
console.log("A",myArr)
const myn1 = myArr.splice(1,3)
console.log("B", myArr)
console.log(myn1)
