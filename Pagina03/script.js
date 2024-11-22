const typed = new Typed('#typed-text', {

    strings: ["#SUSTENTABILIDADE","#AJUDA AMBIENTAL"],
    typeSpeed: 70, //Velocidade que sera digitado nosso texto
    backSpeed: 0.1, //Velocidade de retorno
    loop: true, //texto em execução infinto 
    showCursor: false, //Remove o cursor padrao de html.
    fadeOut: true, //Adiciona uma transição
});

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
    