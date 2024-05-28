const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// Push
marvel_heros.push(dc_heros)
console.log(marvel_heros)

console.log(marvel_heros[3][1])

// concatination
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


// spread operation
const all_Heros = [...marvel_heros,...dc_heros]
console.log(all_Heros)

// new 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Jay pratap")) //false
console.log(Array.from("Jaypratap")) // this is converted into array


let score=100
let score1=200
let score2=300
console.log(Array.of(score, score1, score2));
