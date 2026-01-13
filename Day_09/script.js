
let btn = document.getElementById('btn')

btn.addEventListener('click' , (e)=>{

    e.preventDefault()

    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    let emailError = document.getElementById("emailerror")
    let passwordError = document.getElementById("passworderror")



    let isvalid = true

    //email 
    if(email === ""){
        emailError.textContent = "email is required"
        isvalid = false
    }
    else if(!isvalidEmail(email)){
        emailError.textContent = "Invalid email"
        isvalid = false
    }
    else{
        emailError.textContent = ""
    }

    //password
    if(password === ""){
        passwordError.textContent = "password is required"
        isvalid = false
    }
    else if(password.length < 8){
        passwordError.textContent = "length is to short"
        isvalid = false
    }
    else{
        passwordError.textContent = ""
    }

    //isvalid true
    if(isvalid){
        document.getElementById("loginform").reset()
         alert("Welcome back")

    }


})

function isvalidEmail(email){
    if(!email.includes("@")) return false
    if (!email.includes(".")) return false

    let apos = email.indexOf("@")
    let dotpos = email.lastIndexOf(".")

    if(apos < 1 || dotpos < apos + 5 || dotpos === email.length-1){
        return false
    }

    return true
}

function showPassword(){
    let pass = document.getElementById('password');
    if(pass.type = 'password'){
        pass.type = 'text';
    }
    else{
        pass.type = 'password';
    }
}