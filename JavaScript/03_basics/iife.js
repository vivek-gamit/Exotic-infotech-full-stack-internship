// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED...`);
})();

((name)=>{
    console.log(`DB CONNECTED ${name}...`);
    
})('vivek')


/* IFFE is used to avoid global variable polution and it run immediately 
 
+++++++ important ++++++++

when two IIFE in one code than ';' is neccesary after one IFFE function other wise it gives ERROR 
*/

