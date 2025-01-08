const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

 function nextSlide() {
slides[currentIndex].classList.remove('active');
currentIndex = (currentIndex + 1) % slides.length; 1 
slides[currentIndex].classList.add('active'); 2 
 }
 setInterval(nextSlide, 3000)