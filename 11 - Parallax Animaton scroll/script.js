const hill_1 = document.querySelector(".hill-1")
const hill_4 = document.querySelector(".hill-4")
const hill_5 = document.querySelector(".hill-5")
const leaf = document.querySelector(".leaf")
const text = document.querySelector("h1")
const women = document.querySelector(".women")
const zoomImg = document.querySelector(".zoom-img")

window.addEventListener("scroll",()=>{
  const scrollY = window.scrollY
  if(scrollY <= 200){
    text.style.marginTop = `${scrollY * 1.5}px`
  }
  if(scrollY > 1200){
    // console.log(scrollY)
    women.style.transform = `translateX(${(scrollY - 1200)* -0.2}px)`
  
  }
  
  leaf.style.top = `${scrollY * -0.6}px`
  leaf.style.left = `${scrollY * 0.6}px`
  hill_1.style.top = `${scrollY * 0.6}px`
  hill_4.style.left = `${scrollY * -0.6}px`
  hill_5.style.left = `${scrollY * 0.6}px`

})

let zoom = 1
let speed = 0.1
zoomImg.addEventListener("wheel",(e)=>{
  if(e.deltaY  > 0){
    zoom  = zoom + speed
  }
  else{
    zoom  = zoom - speed
  }
  zoomImg.style.transform = `scale(${zoom})`
})


