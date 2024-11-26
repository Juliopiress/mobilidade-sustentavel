// Inicializando o efeito ScrollReveal na primeira seção (#section1)

ScrollReveal().reveal('#hero', {
    duration: 2000, // Duração do efeito (em millisegundos), define a velocidade da transição
    origin: 'bottom', //Origem do efeito: o conteudo virá de baixo para cima
    distance: '50px', //Distancia que o elemento "viaja" antes de aparecer
});

// Configurando o efeito ScrollReveal na segunda seção (#section2)
ScrollReveal().reveal('#sobre', {
    duration: 1000, // Duração do efeito de revelação
    origin: 'right', //Origem do efeito: o conteudo virá da direita para a esquerda
    distance: '50px', //Distancia do movimento antes do elemento se revelar
});


const typed = new Typed('#Typed-text', {
    strings: ['O que é um teleferico', 'O que é um teleferico'],
    typedSpeend: 50,
    backSpeed: 25,
    loop: true,
    showCursor: false,
    fadeOut: true,
});

// $(document).ready: função que garante que o codigo dentro dela execute
//Somente apos HTML completo da pagina esta carregando

$(document).ready(function() {

    // Seleciona o container .carousel e aplica a função slick()
    // Que ativa o carrossel com as configuraçoes abaixo
    $('.carousel').slick({

        //slidesToshow: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3,  //Exibe 3 cards ao mesmo tempo


        //SlidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToScroll: 1, //Move 1 card por vez ao deslizar

        //Infinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: true, //Mantém o carrossel em rotação continua

        //dots: quando true, ativa os pontos de navegação abaixo do carrosel
        dots: true, //Adiciona pontos de navegação para os usuarios

        // arrows: exibe setas de navegação nas laterais do carrosel
        arrows: true //Ativa as setas para navegar entre os cards

    });
});

hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVE uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});