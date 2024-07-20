const faqhead = document.querySelectorAll(".faq-head")

faqhead.forEach((head)=>{
    
  head.addEventListener("click",()=>{
    const faqitem = head.parentElement
    const isopen = faqitem.classList.contains("show")

    // remove open items
    document.querySelectorAll(".faq-item.show").forEach((element)=>{
      element.classList.remove("show")
    })

    if(!isopen){
      faqitem.classList.add("show")
    }
  })
})


// progress-bar

const bar = document.querySelector(".progress-bar")

window.addEventListener("scroll",()=>{
  const scrollHeight= window.scrollY
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progress = (scrollHeight/height)*100
  bar.style.width = progress+"%"
})

// tab

const tab = document.querySelectorAll(".tab")

const tabs = (tabIndex)=>{
  for(let i=0 ; i< tab.length ; i++){
    tab[i].style.display = "none"
  }

  tab[tabIndex].style.display = "block"
}
tabs(0)



