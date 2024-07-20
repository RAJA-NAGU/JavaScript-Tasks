const input = document.querySelector(".input")
const btnadd = document.querySelector(".btn-add")
const error = document.querySelector(".error")
const tasklist = document.querySelector(".task-list")


const addTask = ()=>{

  const value = input.value.trim()
  
  if(value === ""){
    error.textContent = "Please Enter the Task"
  }
  else{
    const Task = 
      `
      <div>
       <h2>${value}</h2>
        <button class="btn-edit btn">Edit</button>
        <button class="btn-delete btn">Delete</button>
      </div>
      `
    tasklist.innerHTML +=Task
    input.value = ""
    error.textContent = ""
  }

  const btnDelete = document.querySelectorAll(".btn-delete")

  btnDelete.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      btn.parentNode.remove();
    })
  })

  const btnEdit = document.querySelectorAll(".btn-edit")

  btnEdit.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      let editvalue = e.target

      input.value = editvalue.previousElementSibling.innerHTML
      editvalue.parentNode.remove()
    })
  })


}

btnadd.addEventListener("click",addTask)


// FAQ Tab Change

const tabButtons = document.querySelectorAll(".faq-tab")
const tabContents = document.querySelectorAll(".faq-tab-content")

function faqTabchange(index){
  for(let i=0 ; i< tabContents.length ; i++){
    tabButtons[i].classList.remove("active")
    tabContents[i].style.display = "none"
  }
  tabContents[index].style.display = "block"
  tabButtons[index].classList.add("active")
}

// FAQ accordian

const faq_boxes = document.querySelectorAll(".faq-box")
const faq_box_contents = document.querySelectorAll(".box-content")

function faqContent(index){
  let item = faq_box_contents[index]
  let box = faq_boxes[index]

  for( let i=0 ; i < faq_box_contents.length ; i++){
    faq_box_contents[i].style.height = "0"
    faq_boxes[i].classList.remove("active")
  }

  if(item.offsetHeight === 0){
    item.style.height = item.scrollHeight + "px"
    box.classList.add("active")
  }
  else{
    item.style.height = "0"
    box.classList.remove("active")
  }
}