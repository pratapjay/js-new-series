//  1
// const user={
//     username: "jay",
//     price: 199,
//     welcomeMessage: function(){
//         console.log(`${this.username},Welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// 2
// function chai(){
//     username: "new"
//     console.log(this);
// }
// chai()


// arrow function 
// const chai = function(){
//     let username = "new"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "new"
    console.log(this);
}
chai()


// arrow

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(65,45));

// implicite return
const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(3,5))