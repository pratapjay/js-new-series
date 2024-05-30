// object literals  
const mySym = Symbol("Prashant") // This is symbol

const JSUser = {
    name: "JayPratap",
    "Full Name": "JaypratapSingh",
    [mySym]: "Prashant", // this is a way of define symbol in object 
    age: 18,
    location: "Jaipur",
    email: "pratapjay684@gmail.com",
    isLoggedIn: false,
}
// console.log(JSUser.name)         //This is not a write way to print any variable
// console.log(JSUser["name"]);     //This is Valid

//console.log(JSUser.Full Name) //(Full Name)This is not valid in object (We cannot access this value using dot notation)
// console.log(JSUser["Full Name"]) // This is Valid

// console.log(JSUser[mySym]);

// we can overwrite a values
// JSUser.name = "Prashant"
// console.log(JSUser)
 
// We can freeze the value also
// Object.freeze(JSUser)

// after freeze operation We can not overwrite values
// JSUser.name = "Prashant"
// console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello World");
}
console.log(JSUser.greeting);

JSUser.greeting2 = function(){
    console.log(`Hello World, ${this.email} `);
}
console.log(JSUser.greeting2());


