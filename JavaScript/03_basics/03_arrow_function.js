const user = {
    usename: 'vivek',
    price:99,

    welcomeMessage: function(){
        console.log(`${this.usename}, welcome to the website...`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.usename = 'sam';

// user.welcomeMessage()

// console.log(this);


// function chai(){
//     const userName = 'vivek'
//     console.log(`${this.userName}, welcome to website`);
    
// }
// chai()

// const tea = function(){
//     const userName = 'vivek'
//     console.log(`${this.userName}, welcome to website..`);
    
// }
// tea()

/* ++++++++++++++ arrow function ++++++++++++++++++++ */


// const chai = () =>{
//     const userName = 'vivek'
//     console.log(`${this.userName}, welcome back...`);
    
// }

// const chai = () =>{
//     const userName = 'vivek'
//     console.log(`${userName}, welcome back...`);
    
// // }
// chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({name: 'Vivek'})
console.log(addTwo());