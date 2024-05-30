// const tinderUser = new Object()  // singleton object
const tinderUser = {}  // Non singleton object 
tinderUser.id = "123abs"
tinderUser.name = "Jay Pratap"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "pratapjay694@gmail.com",
    fullname: {
        Username: {
            firstName: "Jay",
            lastName: "Pratap"
        }
    }
}
// console.log(regularUser.fullname.Username);

// const obj1 = {1: "a",2: "b"}
// const obj2 = {3: "a",4: "b"}
// // const obj3 = Object.assign({},obj1,obj2) // assign ke through we can assign object 

// const obj3 = {...obj1,...obj2} // this is spresd syntax and this is modern syntax 
// console.log(obj3);


// Inside a array object
const Users = [
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 1,
        email: "P@gmail.com"
    },

]

Users[1].email


console.log(Object.keys(tinderUser)) // this object give output as a array // line number 2
console.log(Object.values(tinderUser)) //refer line number 2
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));