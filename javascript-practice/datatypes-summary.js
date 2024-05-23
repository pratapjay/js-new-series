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




//++++++++++++++++++++++++++++++++++++++++++++========+++++++++++++++++++++++++++++++++++++++
// 1.stack (Primitive), 2.Heap (Non-Primitive)


//1.stack (Primitive) 
let value="Jay"
let Value1=value
Value1="Pratap"

console.log(value)
console.log(Value1)  //Only this will make a copy of the value here.

// 2.Heap (Non-Primitive)
 
let userOne = {
    email: "pratapjay694@gmail.com",
    upi: "user@ypy",
}

let userTwo=userOne
userTwo.email="Pratapjay697@gmail.com"
userTwo.upi="user1@ypm"

console.log(userOne, userTwo); // This will change the value (and other term we can say this will provide a Reference )