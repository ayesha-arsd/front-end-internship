let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');
let featured = document.getElementById('featured');


let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function(event){
        let tab = a.dataset.tab;
        if(tab !== null && tab !== active){

            let activeOld = document.querySelector('.tab.active');
            if(activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})


// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email');
    let message = document.getElementById('message');

    let emailError = document.getElementById('emailError');
    let messageError = document.getElementById('messageError');

    let isValid = true;

    // Reset old errors
    emailError.textContent = "";
    messageError.textContent = "";

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message";
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");
        email.value = "";
        message.value = "";
    }
});


// Carousel 
let index = 0;
const images = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

function showSlide(i){
  images.forEach(img => img.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  images[i].classList.add("active");
  dots[i].classList.add("active");
}

function nextSlide(){
  index = (index + 1) % images.length;
  showSlide(index);
}

let slideInterval = setInterval(nextSlide, 3000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000); 
  });
});
