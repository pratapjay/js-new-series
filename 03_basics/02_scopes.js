let a=40;
if(true){
    let a=20
    const b=30
    console.log("Inner:", a);
}
console.log(a);
// console.log(b);

function one(){
    const username = "Jay Pratap"
    function Two(){
        const website = "Youtube"
        console.log(username);
    }
    Two()
}
one()


if(true){
    const username="Jay Pratap";
    if(username==="Jay Pratap"){
        const website="Youtube"
        console.log(username+" "+website);
    }
}


//++++++++++++++++++++++++++++++++//
console.log(addOne(5))
function addOne(num){
    return num+1;
}


const addTwo=function(num){
    return num+2
}
addTwo(56)