const form = document.querySelector(".registrationForm")
const inputs = document.querySelectorAll(".input")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs()
})

function validateInputs(){
    
    inputs.forEach((input)=>{
        const element = input.getAttribute("name")
        const value = input.value.trim()
        
        if(value === ""){
            setError ( input , `${element} is reqired`)
        }else if(element === "email" && !validatemail(value)){
            setError(input , `${element} not valid`)
        }else if(element === "confirmPassword" && value != inputs[2].value.trim()){
            setError(input , `${element} does not match`)
        }else{
            setSuccess(input)
        }
    })
}

function setError(input,message){
    const formcontrol = input.parentElement
    const error = formcontrol.querySelector(".error")
    error.textContent = message
    formcontrol.classList.add("error")
}

function setSuccess(fieldname){
    const formcontrol = fieldname.parentElement
    const error = formcontrol.querySelector(".error")
    error.textContent = ""
}

function validatemail(value){
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error = email.test(value)
    console.log(error)
    return email.test(value)
}


