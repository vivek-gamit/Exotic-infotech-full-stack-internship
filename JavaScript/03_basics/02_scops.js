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
        console.log(`Hello my name is ${userName}`);
        const website = 'E-learning'
    }

    // console.log(website);

    two()
}

one()
