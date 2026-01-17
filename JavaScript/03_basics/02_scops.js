//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

/* ++++++++++++++++++ inner function ++++++++++++++++*/

function one(){
    const userName ='vivek';

    function two(){
        // console.log(`Hello my name is ${userName}`);
        // const website = 'E-learning'
    }

    // console.log(website);

    two()
}

one()

/* ++++++++++++++++++ if else ++++++++++++++++++++ */

if(true){
    const username = 'Vivek';

    if(username === "Vivek"){
        const website = 'E-learning'
        console.log(`Hello my name is ${username} and website is ${website}`);
    }

    // console.log(website);
}

// console.log(userName);

/* +++++++++++++++++ hoisting ++++++++++++++++++++ */

console.log(addTwo(2,3));
function addTwo(num1, num2){
    return num1 + num2;
}



// console.log(Addtwo(3,4));
const Addtwo = function(num1,num2){
    return num1 + num2
}


