if(2!=3){
    console.log("Run");
}

const temperature=39
if(temperature<40){
    console.log("less than 40");
}
else{
    console.log("greater than 40");
}


const score=200;
if(score > 120){
    let power ="fly"
    console.log(`User Power: ${power}`);
}

// short hand notation

const balance=1000
if(balance>500) console.log("test");

const UserLoggedIn = true
const debitCard = true
const LoggedInfromgoogle = false
const LoggedInfromgmail = true
if(UserLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if(LoggedInfromgoogle || LoggedInfromgmail){
    console.log("Allow to buy bhindi");
}
