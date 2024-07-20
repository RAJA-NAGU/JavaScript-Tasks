
// ////////////////////
// accordian
// //////////////////
const accordianHead = document.querySelectorAll(".accordian-head")

accordianHead.forEach((acchead)=>{
  acchead.addEventListener("click",()=>{
    const accordianItem = acchead.parentElement
    
    // close all if it is open
    const isOpen = accordianItem.classList.contains("open")
    document.querySelectorAll(".accordian-item.open").forEach((element)=>{
      element.classList.remove("open")  
    })

    // open selected
    if(!isOpen){
      accordianItem.classList.add("open")
    }

  })
})
// ////////////////////
// tabs
// //////////////////
const tabs = document.querySelectorAll(".tabs")
const tab = (index)=>{
  for( let i=0 ; i < tabs.length; i++){
    tabs[i].style.display = "none" 
  }
  tabs[index].style.display = "block"
}

// ////////////////////
// carousel
// //////////////////

const slide = document.querySelectorAll(".slide")
const btn = document.querySelectorAll(".btn")
const indicators= document.querySelectorAll(".indicator-link")

let currentslide = 0
let maxslide = slide.length - 1

const updateslide = (number)=>{
  slide.forEach((item,index)=>{
    item.style.transform = `translateX(${(number - index)*100}%)`
  })
}

const updateindicator = (number)=>{
  indicators.forEach((indicator,index)=>{
    indicator.classList.toggle("active",index === number )
  })
}

updateslide(currentslide);

btn.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    if(item.classList.contains("next")){
      currentslide++
    }
    else{
      currentslide--
    }
    if(currentslide > maxslide){
      currentslide = 0
    }else if(currentslide < 0){
      currentslide = maxslide
    }
    updateslide(currentslide)
    updateindicator(currentslide)
  })
})

// ////////////////////
// formvalidation
// //////////////////
const form = document.querySelector(".form-validate")

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  formvalidate()
})
const formvalidate = ()=>{

  const uname = document.getElementById("name").value
  const mail = document.getElementById("mail").value
  const password = document.getElementById("password").value
  const cpassword = document.getElementById("cpassword").value
  const college = document.getElementById("college").value
  const subject = document.getElementById("subject").value
  const agree = document.getElementById("agree").checked
  
  const nameerror = document.getElementById("name-error")
  const mailerror = document.getElementById("mail-error")
  const passworderror =document.getElementById("password-error")
  const cpassworderror = document.getElementById("cpassword-error")
  const subjecterror = document.getElementById("subject-error")
  const agreeerror = document.getElementById("agree-error")
  const collegeerror = document.getElementById("college-error")
  

  nameerror.textContent = ""
  mailerror.textContent = ""
  passworderror.textContent = ""
  cpassworderror.textContent = ""
  subjecterror.textContent = ""
  agreeerror.textContent = ""
  collegeerror.textContent = ""
  
  
  if(uname==="" || uname.length < 6){
    nameerror.textContent = "name should not be empty atleast 6 charecter"
  }
  if(mail ==="" || !validate(mail) ){
    mailerror.textContent = "enter valid mail address"
  }


  if(password ==="" || password.length < 6){
    passworderror.textContent = "Enter valid password"
  }
  
  if(cpassword ==="" || cpassword!==password){
    cpassworderror.textContent = "password does not match"
  }
  if(college===""){
    collegeerror.textContent = "College should not be empty"
  }
  if(subject===""){
    subjecterror.textContent = "please select the subject"
    
  }
  if(!agree){
    agreeerror.textContent = "please agree to the information"
  }

}


const validate = (mail) =>{
  const regexp = /^[a-zA-Z0-9!#$%*+_]+@[a-zA-Z0-9-]+\.[a-z]+$/;
  return regexp.test(mail)
}
  
  
  
  

// const inputs = document.querySelectorAll("input")
// const form = document.querySelector('.form-validate')

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   formvalidate()
// })


// const formvalidate = ()=>{
//   inputs.forEach((input)=>{
//     const element = input.getAttribute("name")
//     const value = input.value.trim()

//     if(value===""){
//       seterror(input, `${element} should not empty`)
//     }
//     else{
//       setsuccess(input)
//     }

//   })
// }

// const seterror = (input , message)=>{
//   const formelement = input.parentElement
//   const error = formelement.querySelector(".error")
//   error.textContent = message
//   formelement.classList.add("error")
// }

// function setsuccess(input) {
//   const formControl = input.parentElement;
//   const error = formControl.querySelector(".error");
//   error.textContent = "ok";
//   formControl.classList.remove("error");

// }


