const myArr = [1,2,3,4,5,6]
const myHeros = ['Iron Man', 'Spider Man', 'Thor', 'Black Panther']

// console.log(myArr[3]);
// console.log(myHeros[2]);

const myArr2 = new Array(1,2,3,4,5,6,7)
// console.log(myArr2[4]);

/*++++++++++++++++++++++++++++++++++ Array methods+++++++++++++++++++++++++++++++ */

// myArr.push(45)
// console.log(myArr);
// myArr.pop();
// myArr.unshift(12);
// myArr.shift()
// console.log(myArr);

const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

// console.log(typeof newArr);

/* ++++++++++++++++ slice, splice +++++++++++++ */
console.log('OG array :',myArr);

console.log(myArr.slice(1,4));
console.log('after slice : ',myArr);

console.log(myArr.splice(1,4));
console.log('after splice :', myArr);











