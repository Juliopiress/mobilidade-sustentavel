ScrollReveal().reveal(
    '#section2', {

             duration: 5000,
             origin: 'right',
             distance: '155px'

    });
    ScrollReveal().reveal(
        '#text', {
    
                 duration: 5000,
                 origin: 'right',
                 distance: '155px'
    
        });

        const typed = new Typed('#typed-text', {

            strings: ["#SUSTENTABILIDADE","#AJUDA AMBIENTAL"],
            typeSpeed: 70, //Velocidade que sera digitado nosso texto
            backSpeed: 0.1, //Velocidade de retorno
            loop: true, //texto em execução infinto 
            showCursor: false, //Remove o cursor padrao de html.
            fadeOut: true, //Adiciona uma transição
        });

        // Rolagem automática do carrossel
let carouselInterval = setInterval(() => {
    let carousel = new bootstrap.Carousel(document.getElementById('myCarousel'));
    carousel.next();
},loop) ;// Muda a cada 3 segundos

// Parar a rolagem automática ao interagir com os botões
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            let carousel = new bootstrap.Carousel(document.getElementById('myCarousel'));
            carousel.next();
        }, loop);
    });
});