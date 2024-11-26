ScrollReveal().reveal(
    '#section1div1', {

             duration: 5000,
             origin: 'right',
             distance: '155px'

    });
    ScrollReveal().reveal(
        '#text01', {
    
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

// Seleciona o elemento que contem todas as imagens do carrosel
const track = document.getElementById('carouselTrack');

// Obtem o numero de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // Indice que rastreia a imagem atual


// funçao que move o carrossel para a proxima imagem
function moveCarousel() { 
    index++; //incrementa o indice para avançar uma imagem

    if (index >= items.length - 1) {
      

        setTimeout(() => {
          track.style.transition = 'none';

          index = 0;

          track.style.transform = `translateX(0)`;


        }, 500);
    }  else {
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${index * 100}%)`;
    }

}

setInterval(moveCarousel, 4000);


document.addEventListener('DOMContentLoaded', function () {
    // Clona o elemento com o ID 'headline-scroll' para criar um efeito de rolagem contínua
    const headlineScroll = document.getElementById('headline-scroll');
    const clone = headlineScroll.cloneNode(true);
    headlineScroll.parentNode.appendChild(clone);

    // Define a largura dos elementos com base na largura do conteúdo
    const scrollWidth = headlineScroll.scrollWidth;
    headlineScroll.style.width = `${scrollWidth}px`;
    clone.style.width = `${scrollWidth}px`;
});

// Cria e adiciona um estilo CSS para a animação de rolagem
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}`;
document.head.appendChild(styleSheet);










hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVE uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});