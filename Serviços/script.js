

window.addEventListener('load', () => {
    const title = document.getElementById('title');
    title.style.animation = "fadeInUp 2s forwards"; // Ativando a animação no carregamento
});

// $(document).ready: função que garante que o codigo dentro dela execute 
//somente apos o html completo da pagina esta carregado

$(document).ready(function(){
    
    //seleciona o conteiner .carousel e aplica a função slick()
    //que ativa o carousel com as configurações abaixo
    $('.product-list').slick({
        
        //slidestoshow: número de cards exibidos ao mesmo tempo no carousel
        slidesToShow:3, // Exibe 3 cards ao mesmo tempo

        //slideToscroll:define quantos cards serão deslizados ao mover o carousel
        slidesToScrool:3, // mover 1 card por vez ao deslizar

        // infinite: quando true, o carrosel retorna ao inicio automaticamente 
        infinite:true, // matem o carrosel em rotação continua 

        //dots: quando true, ativa os produtos de navegação abaixo do carrosel
        dots:true, // adiciona pontos de navegação para os usuarios

        //arrows: exibe setas de navegação nas laterais do carousel
        arrows:true // Ativa as setas para navegar entre os cards
    }) ;
});

function trocarCor() {
    if (document.body.style.backgroundColor === "black") {
       
        document.body.style.backgroundColor = "white";
        document.body.style.color = "green";

        document.getElementById("button-header").textContent = "Modo Escuro"
    } else {
      
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        document.getElementById("button-header").textContent = "Modo Claro"

      
    };
}