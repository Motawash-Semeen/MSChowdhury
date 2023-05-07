var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 200);
}

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".main").style.display = "block";
}

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
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
window.onscroll = function() { scrollFunction() };

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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
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

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener("click", activeWork))



function hideproject() {
    document.querySelector(".demo-modal-area").classList.add("d-none");
    // document.querySelector(".container").classList.remove("d-none");
    // document.querySelector(".top_button").classList.remove("d-none");
    // document.querySelector(".rn-right-Project").classList.remove("d-none");
}

function showPro() {
    document.querySelector(".demo-modal-area").classList.remove("d-none");
    // document.querySelector(".container").classList.add("d-none");
    // document.querySelector(".top_button").classList.add("d-none");
    // document.querySelector(".rn-right-Project").classList.add("d-none");
}


var app = document.querySelector('.span');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "",
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('UI/UX Designer')
    .pauseFor(2500)
    .start();

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
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
const img = document.querySelectorAll("#myImg");
var con = document.querySelector(".container");

var captionText = document.getElementById("caption");
console.log(img)
img.forEach((img, index) => { // index will be current button index
    img.addEventListener("click", function(e) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        console.log(e.target, index);
    });
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}



AOS.init();

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    console.log("cicked")
    if (e.target.classList.contains("work_button")) {

        toggleProtfolioPopup();
        protfolioItemDetails(e.target.parentElement);
    }
})

function toggleProtfolioPopup() {
    document.querySelector(".protfolio_popup").classList.toggle("open");
}
document.querySelector(".protfolio_popup-close").addEventListener("click", toggleProtfolioPopup)

function protfolioItemDetails(protfolioItem) {
    document.querySelector(".pp_thumbnail img").src = protfolioItem.querySelector(".work_img").src;
    document.querySelector(".protfolio_popup-subtitle span").innerHTML = protfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".protfolio_popup-body").innerHTML = protfolioItem.querySelector(".protfolio_item-details").innerHTML;
}