//1.
const name="JayPratap"
const repoCount=60
console.log(`My name is ${name} and My repocount is ${repoCount}`);

// 2.
const gameName= new String('JAYPRATAP')
console.log(gameName);
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('P'))
console.log(gameName.length);
const newString=gameName.substring(1,6);
console.log(newString);
const anotherString= gameName.slice(-9,5);
console.log(anotherString)

// 3.
const anotherName=new String("   Jay Pratap   ")
console.log(anotherName)
console.log(anotherName.trim());

// 4.
const url="https://jaypratap.com%25andconnection%25newphone"
console.log(url.replace('%25','-'))

// 5.
const gameName1=new String('Jay-Pratap-Singh')
console.log(gameName1.split('-'))




