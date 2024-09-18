let currentSlide = 1;
function showSlide(slideNumber){
    let slides = document.querySelectorAll('.main1, .main2');
    let indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        indicators[index].classList.remove('active');
    });

    slides[slideNumber - 1].style.display = 'block';
    indicators[slideNumber - 1].classList.add('active')
}
 // Initialize first slide to show
 showSlide(currentSlide);