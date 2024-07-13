// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

// Example
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j}, outer loop${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// Example
let myArray = ["jay","pratap","singh"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue
// break
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is best");
        break
    }
   console.log(`value of i is ${i}`);
}

// continue
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is best");
        continue
    }
   console.log(`value of i is ${i}`);
}