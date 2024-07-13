// falsy value
// Note: false,0,-0,BigInt 0n,null,undefined,Nan,""

// truthy value
// note: "0","false"," ",[],{},function(){}
// rest are truthy value

const loggedEmail = ""
if(loggedEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// for check array is empty 

if(loggedEmail.length === 0){
    console.log("Array is Empty");
}

// for check object
const emptyobject = {}
if(Object.keys(emptyobject).length === 0){
    console.log("Object is empty");
}

// nullish coalescing operator (??): null undefined 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
console.log(val1);

// Ternary operator
// condition ? true : false
const newnum = 100
newnum>=501 ? console.log("Yes"): console.log("No")