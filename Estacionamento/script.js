
// ------------------------Delay no Site----------------------

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
        arrows: true,
        //ativa a ssetas para navegar entre os cards


    })
})
// ---------------------------------------------------------------------------------------------------------