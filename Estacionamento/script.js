
// ------------------------Delay no Site----------------------

window.revelar = ScrollReveal({reset:true});


revelar.reveal('.section1', {
    duration: 2000,
    distance: '90px'
})


revelar.reveal('.section2', {
    duration: 2000,
    distance: '120px'
})

revelar.reveal('.section3', {
    duration: 2000,
    distance: '200px'
})

revelar.reveal('.cabeçalho',{
    duration: 1500,
    distance : '60px'
})

revelar.reveal('.img-div',{
    duration: 1500,
    distance : '60px'
})
//----------------------------------------------------------------------------------------------------------

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Atualiza o índice atual
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Move o carrossel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
