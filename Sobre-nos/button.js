function trocarCor() { // Função do Botão modo escuro para trocar de cor ao clicar

    if (document.body.style.backgroundColor === "black") {
       
        document.body.style.backgroundColor = "white";
        document.body.style.color = "white";

        document.getElementById("button-header").textContent = "Modo Escuro"
    } else {
      
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        document.getElementById("button-header").textContent = "Modo Claro"

      
    };
};


// Função para deixar o vídeo da sessão 1 de fundo

window.addEventListener("resize" , function(){

   const video = document.querySelector(".video");
   const section = document.querySelector(".section-1");
   const overlay = document.querySelector(".overlay");

   section.style.height = video.offsetHeight + "px";
   overlay.style.height = video.offsetHeight + "px";

   

}, true);



document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});