// object
const myObject = {
    js: "javascript",
    cpp: "c++",
    swift: "swiftcar"
}
// for (const key in myObject) {
//        console.log(key);    
// }

for (const key in myObject) {
    console.log(`${key} full from is ${myObject[key]}`);
}
// array
const arr = [1,2,3,4,5,6]
for (const num in arr) {
    console.log(num);
}

// Example
const arr1 = ["new","jay"]
for (const num in arr1) {
    console.log(arr1[num]);
}



