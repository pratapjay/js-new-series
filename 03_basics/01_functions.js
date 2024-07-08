 // 1.
function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("Y");
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("A");
    console.log("P");
}
 sayMyName()
// 2.
 function addTwoNumber(number1,number2){
    console.log(number1+number2);
 }
 addTwoNumber(5,6)
// 3.
function addTwoNumber(number1,number2){
    let result=number1+number2;
    return result;
}
const result=addTwoNumber(3,6);
console.log("result:",result);
// 4.

function loginuserMessage(username){
    return `${username} just logged in`
}
console.log(loginuserMessage("Jay Pratap"))

// 5.
function loginuserMessage(username){
    if(username===undefined){
        console.log("Enter a value of username");
    }
    return `${username} just logged in`
}
console.log(loginuserMessage())

// 6.

function loginuserMessage(username="sam"){
    return `${username} just logged in`
}
console.log(loginuserMessage("jay"))

// 7.   (...->rest operator)

function calculatecartPrice(...num){
    return num
}
console.log(calculatecartPrice(200,400,500,6000,80000,900000,555555555));

// 8 object in function 
// const user = {
//     username: "Jay",
//     Price: 199
// }

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
} 
// handleobject(user)

handleobject({
    username: "sam",
    Price: 500
})

// 9. Array in function

// const myNewArray = [200,400,500,600];

function returnValue(getArray){
    return getArray[1];
}
// console.log(returnValue(myNewArray))
console.log(returnValue([400,500,600]));
