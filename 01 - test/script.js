// ///////////////////////////////////
//  carousel
// //////////////////////////////////

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:2000,
    // autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
    
  });
});

// ///////////////////////////////////
//  Imageshow
// //////////////////////////////////


const img = document.querySelectorAll(".img-item")
const overlay = document.querySelector(".overlay")



const openImage = (item)=>{
  item.classList.add("show-img")
  overlay.classList.remove("hide")
}

const closeImage = ()=>{
  img.forEach((item)=> item.classList.remove("show-img") )
  overlay.classList.add("hide")

}

img.forEach((item)=> {
  item.addEventListener("click",()=>openImage(item))
})

overlay.addEventListener("click",()=>closeImage())



// ///////////////////////////////////
//  accordian
// //////////////////////////////////

const accordianHead= document.querySelectorAll(".accordian-head")

accordianHead.forEach((item)=>
  item.addEventListener("click",()=>{
  const accordianItem = item.parentElement; 
  const isOpen = accordianItem.classList.contains("open")

  document.querySelectorAll(".accordian-item.open").forEach((element)=>{
    element.classList.remove("open")
  })

  if(!isOpen){
    accordianItem.classList.add("open")
  }

}))
// ///////////////////////////////////
// clone content
// //////////////////////////////////
const original = document.querySelector(".original-container")
const copy = document.querySelector(".copy-container")

const clone = original.cloneNode(true)
const title = clone.querySelector("h2")

title.textContent = "thanks"
const description = clone.querySelector('p')
description.textContent = "thanks"
copy.appendChild(clone)

// ///////////////////////////////////
// dropdown selection
// //////////////////////////////////

const dropdown = document.querySelector(".drop-down")

function getValue(){
  console.log(dropdown.value)
  console.log(dropdown.options[dropdown.selectedIndex].value)
}