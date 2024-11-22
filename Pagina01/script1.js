function trocarCor() {
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



window.addEventListener("resize" , function(){

   const video = document.querySelector(".video");
   const section = document.querySelector(".section-1");
   const overlay = document.querySelector(".overlay");

   section.style.height = video.offsetHeight + "px";
   overlay.style.height = video.offsetHeight + "px";

   

}, true);


// Seleciona o elemento que contém todas as imagens do carrossel pelo ID 'carouselTrack'
const track = document.getElementById('carouselTrack');

// Obtém o número de imagens no carrossel. Seleciona todos os elementos com a classe 'carousel-item' e os armazena em uma NodeList
const items = document.querySelectorAll('.carousel-item');

//Variável que mantém o índice da imagem atual exibidano carrossel (começa em 0, a primeira imagem)
let index = 0; // Índice que rastreia a imagem atual

// Função que move o carrossel para a próxima imagem. 
function moveCarousel() {

    // Incrementa o índice em 1 para avançar a próximaimagem
    index++;

    // Verifica se o índice atual é maior ou igual ao número de imagens (menos uma)
    // Isso significa que o carrosselestá no final e precisa voltar ao ínicio

    if (index >= items.length - 1) { // Em Java Script, a propriedade length é usada para retornar o número de elementos em uma estrutura de dados, como uma string, um array ou uma lista de elementos do DOM.
        //Exemplo: "Hello".length    retorna 5, pois a string "Hello " tem 5 caracteres.

        
        // Define um atraso de 500 milissegundos antes de executar a função de retorno ao ínicio
        setTimeout(() => {

            track.style.transtion = 'none'; // Remove a transição para que o retorno ao ínicio seja instantâneo e sem animação
            index = 0; // Reseta o índice para 0, que representa a primeira imagem
        track.style.transform = `translateX(0)`; // Move o carrossel de volta para a primeira imagem (posição inicial)
        }, 500); // O tempo de 500 ms garante que a transição anterior (se houver) seja completada.

        
    } else { 
        //Caso o índice ainda não tenha atingido o final, move o carrossel para a próxima
        //Adiciona uma transição suave de 0.5 segundos para o movimento do carrossel
        
        track.style.transition = 'transform 0.5s ease'; // Adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; //Desloca o carrossel
        // Move o carrossel para esquerda, usando o índice atual para calcular o deslocamento
        //Exemplo: Se index =1, desloca -100$, se index =2, desloca -200%, etc.
    }
}

// Define um intervalo de tempo para chamar a função moveCarousel a cada 3000 milissegundos (3 segundos)
//Isso faz com que o carrossel se mova automaticamente a cada 1 segundos.
setInterval(moveCarousel, 2000);


