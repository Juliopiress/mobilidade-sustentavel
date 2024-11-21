
// ----------------------------------------Delay no Site----------------------

window.revelar = ScrollReveal({reset:true});


revelar.reveal('.section1', {
    duration: 2000,
    distance: '120px'
})


revelar.reveal('.section2', {
    duration: 2000,
    distance: '120px',
    origin: 'rigth'
})

revelar.reveal('.cabeçalho',{
    duration: 2000,
    distance : '120px'
})

revelar.reveal('.section3',{
    duration: 2000,
    distance : '120px'
})

revelar.reveal('.conteudo-estacionamento',{
    duration: 1800,
    distance : '215px',
    origin: 'rigth'
})

revelar.reveal('.section4',{
    duration: 2000,
    distance : '120px',
})

revelar.reveal('.carousel',{
    duration: 1800,
    distance : '215px',
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
    fadeOut:false,
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