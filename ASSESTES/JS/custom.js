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



let nav = document.querySelector('.nav')

nav.querySelectorAll('li a').forEach((a, i) => {
    a.onclick = (e) => {
        if (a.classList.contains('nav-item-active')) return

        nav.querySelectorAll('li a').forEach(el => {
            el.classList.remove('nav-item-active')
        })

        a.classList.add('nav-item-active')

        let nav_indicator = nav.querySelector('.nav-indicator')

        nav_indicator.style.left = `calc(${(i * 120) + 60}px - 45px)`
    }
})