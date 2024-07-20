const slides = document.querySelectorAll(".carousel-slide");
const button = document.querySelectorAll(".btn") 
const indicators = document.querySelectorAll(".indicator-link")

let currentslide = 0;
let maxslide = slides.length-1;


const updateslider = (number)=>{
  slides.forEach((item,index)=>{
    item.style.transform = `translateX(${(number - index)*100}%)` 
  })
}

const updateIndicators = (number) => {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === number);
  });
};

button.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(btn.classList.contains("next")){
      currentslide++;
      console.log("true")
    }
    else{
      currentslide--;
    }
    if(currentslide > maxslide){
      currentslide = 0;
    }else if(currentslide < 0){
      currentslide = maxslide
    }
    updateslider(currentslide)
    updateIndicators(currentslide)
  })
})


