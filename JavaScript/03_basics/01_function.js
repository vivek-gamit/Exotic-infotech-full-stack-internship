function syaMyName(){
    console.log('v');
    console.log('i');
    console.log('v');
    console.log('e');
    console.log('k'); 
}
// SyaMyName();

function addTwoNumbers(number1,number2){
    return number1+number2;
}
// let result = addTwoNumbers(2,5);
// console.log('Result :',result);

function loginUserMessage(useName){
    if(!useName){
        console.log("Enter Your name....");
        return;
    }
    console.log(`Welcome back ${useName}....`);
    
}

// loginUserMessage("Kakashihatake");


/* ++++++++++++++++++++++++ Object Handling in function +++++++++++++++++++++ */

const user = {
    name: 'vivek',
    age : 22
}

function handleObject(anyObject){
    console.log(`Hello my name is ${anyObject.name} and i'm ${anyObject.age} year old...`);
}

// handleObject(user);

// handleObject(user);

const myArr = [100,200,300,400]

function handleArray(anyArray){
    console.log(anyArray[3]);
    
}

// handleArray(myArr);

