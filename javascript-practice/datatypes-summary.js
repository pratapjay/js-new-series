// Primitive datatype
let newString="Jay Partap"
const numberId=123
const booleanId=true
const accountId=null
let stateName;
const id=Symbol('123')
const bigNumber=56666222222222225888888899n
console.log(newString,numberId,booleanId,accountId,stateName,id,bigNumber)

//typeof Primitive data type
console.log(typeof newString)
console.log(typeof numberId)
console.log(typeof booleanId)
console.log(typeof accountId)
console.log(typeof stateName)
console.log(typeof id)
console.log(typeof bigNumber)


// Non Primitive data type

// 1.Array
let heros=["Akhilesh", "Prabhat", "Sunil"]; 

// 2.Object
const myObject={  
    name: "JayPratap",
    age: 18,
}

// 3.Function
const myFunction = function(){ 
    console.log("Hello World");
}

console.log(heros,myObject,myFunction)

//type of Non-Primitive data type
console.log(typeof heros)
console.log(typeof myObject)
console.log(typeof myFunction)