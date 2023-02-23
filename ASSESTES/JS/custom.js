var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".main").style.display = "block";
}

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");
function focusFunc()
{
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc()
{
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})



// Get the button
let mybutton = document.getElementById("top_button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}






var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  cssMode: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".next_testi",
    prevEl: ".prev_testi",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work_container', {
  selectors: {
      target: '.work_card'
  },
  animation: {
      duration: 300
  }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item')
function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener("click",activeWork))



function hideproject(){
  document.querySelector(".demo-modal-area").classList.add("d-none");
  document.querySelector(".container").classList.remove("d-none");
  document.querySelector(".top_button").classList.remove("d-none");
  document.querySelector(".rn-right-Project").classList.remove("d-none");
}
function showPro(){
  document.querySelector(".demo-modal-area").classList.remove("d-none");
  document.querySelector(".container").classList.add("d-none");
  document.querySelector(".top_button").classList.add("d-none");
  document.querySelector(".rn-right-Project").classList.add("d-none");
}




// Add active class to the current button (highlight it)
var header = document.querySelector(".header ul");
var btns = header.getElementsByClassName("icon-box");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_nav");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active_nav", "");
  }
  this.className += " active_nav";
  
  });
}

