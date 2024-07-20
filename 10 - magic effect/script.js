const cardcontainer = document.querySelector(".card-container")
const card = document.querySelectorAll(".card")

cardcontainer.addEventListener("mousemove",(e)=>{
  card.forEach((item)=>{
    const rect = item.getBoundingClientRect()

   const x = e.clientX - rect.left
  const y = e.clientY - rect.top

    item.style.setProperty("--mouse-x",`${x}px`)
    item.style.setProperty("--mouse-y",`${y}px`)
    console.log("ji")
  })
})