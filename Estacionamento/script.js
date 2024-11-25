
// ----------------------------------------Delay no Site----------------------

window.revelar = ScrollReveal({reset:true});


revelar.reveal('.section1', {
    duration: 2000,
    distance : '125px',
    origin: 'rigth'
})


revelar.reveal('.section2', {
    duration: 1000,
    distance : '100px',
    origin: 'rigth'
})

revelar.reveal('.cabeçalho',{
    duration: 1000,
    distance : '100px',
    origin: 'rigth'
})

revelar.reveal('.section3',{
    duration: 1000,
    distance : '100px',
    origin: 'rigth'
})

revelar.reveal('.conteudo-estacionamento',{
    duration: 2000,
    distance : '125px',
    origin: 'rigth'
})

revelar.reveal('.section4',{
    duration: 1000,
    distance : '100px',
    origin: 'rigth'
})

revelar.reveal('.carousel',{
    duration: 2000,
    distance : '100px',
    origin: 'rigth'
})


//-----------------------------------------Codigo carrousel-----------------------------------------------

$(document).ready(function() {
    //seleciona o container. carolsel e aplica a função slick()
    //que ativa o carrossel com as configurações abaixo
    $('.carousel').slick({
        //slidesToshow: numero de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3,
        //slidesto scroll: define quantos cards serao deslizados ao mover o carrossel
        slidesToScroll: 1,
        //infinit: quando true, o carrossel retorna ao inicio automaticamente
        //mantem o carrossel em rotação continua
        infinit: true, //mantem o carrossel em rotação continua

        //dots: quando true, ativa setas de navegação nas laterais do carrolssel
        dots: true,

        //arrows: exibe setas de navegação nas laterais do carrosel
        arrows: false,
        //ativa a ssetas para navegar entre os cards
    })
})


// -------------------------------Escrevendo sozin header-------------------------------------------------


const typed = new Typed('#txt-header',
    {
    strings: ["Movendo o Futuro com Sustentabilidade!"],
    typedSpeed: 100, //Velocidade que será digitado nosso text
    
    backSpeed:25,// Velocidade de retorno do text
    loop: true,
    showCursor: false,
    fadeOut:true,
    });

    //---------------------------------------Tema Escuro---------------------------------------------

    const btnModoEscuro = document.querySelector('#Btn-modoEscuro');
    const body = document.body;
    
    // Adiciona evento de clique
    btnModoEscuro.addEventListener('click', () => {body.classList.toggle('dark-mode');
        
        // Altera o texto do botão conforme o tema
        if (body.classList.contains('dark-mode')) 
        {
            btnModoEscuro.textContent = 'Modo Claro';
        } 
        else 
        {
            btnModoEscuro.textContent = 'Modo Escuro';
        }
    });

    //------------------------- Script carrousel ---------------------------------------------------

    //Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVE uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});
