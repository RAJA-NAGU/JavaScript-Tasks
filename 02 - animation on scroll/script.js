const sections = document.querySelectorAll(".section")

window.onscroll = ()=>{
  sections.forEach((section)=>{
    let scrollDistance = window.scrollY 
    let secDistance = section.offsetTop
    
    if (scrollDistance >= secDistance -150 ) {
      section.classList.add("showanimate")

  } 

  })
}

const progressbar = document.querySelector(".progess-bar")

window.addEventListener("scroll",()=>{
  const scrollTop = window.scrollY

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progress = (scrollTop / height) *100

  progressbar.style.width = progress + "%"

})

function scrollDirection(e){
  const direction = e.deltaY > 0 ? "down" : "up"
  console.log(direction)
}
window.addEventListener("wheel",scrollDirection)