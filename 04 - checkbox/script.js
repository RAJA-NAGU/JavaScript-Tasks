const checkbox = document.querySelectorAll(".check-box")

const checkall = document.querySelector(".check-all")

checkbox.forEach((check)=>{
  check.addEventListener("change", ()=>{
    const ischecked = document.querySelectorAll(".check-box:checked").length === checkbox.length

    checkall.checked = ischecked

    if(check.checked){
      check.classList.add("active")
    }
    else{
      check.classList.remove("active")
    }
  })
})

checkall.addEventListener("change",()=>{
  checkbox.forEach((check)=>{
    check.checked = checkall.checked
    console.log(check.checked)
  })
})