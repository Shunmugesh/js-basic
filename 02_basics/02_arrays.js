const marvel_heros = ["Spiderman", "Thor", "Hulk", "Ironman"]
const dc_heros = ["Superman", "Batman", "Flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[4][0])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5], 9]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Shunmugesh"))
console.log(Array.from("Shunmugesh"))

console.log(Array.from({name: "Shunmugesh"})) // will give you empty array (we should mention which array we want i.e KEY or VALUE)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


//  node 02_basics/02_arrays.js