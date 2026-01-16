const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

let newHeros = marvel_heros.concat(dc_heros)
// console.log(newHeros);
// console.log(marvel_heros);

const newHeros2 = [...marvel_heros, ...dc_heros]

// console.log(newHeros2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_array.flat(Infinity)
// console.log(real_another_arr);

console.log(Array.isArray('Vivek'));
console.log(Array.from('Vivek'));
console.log(Array.from({name: 'Vivek'})); 

let score = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;


console.log(Array.of(score,score2,score3,score4,score5,another_array));










