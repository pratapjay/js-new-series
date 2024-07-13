// for of
const arr = [1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
}

//Example
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}

// Maps
// map is not take same value. in other words we can say map always store unique value
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"France")
console.log(map);

for (const key of map) {
    console.log(key);
}
// Example with key value 
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// object
// this will not work here
const myObject = {
    "Name": "Jay Pratap",
    "Class": 7,
    "School": "new"
}
for (const key of myObject) {
    console.log(key);
}