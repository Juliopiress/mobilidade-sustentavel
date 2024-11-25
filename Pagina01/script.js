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

window.addEventListener("resize" , function(){

   const video = document.querySelector(".video");
   const section = document.querySelector(".section-1");
   const overlay = document.querySelector(".overlay");

   section.style.height = video.offsetHeight + "px";
   overlay.style.height = video.offsetHeight + "px";

   

}, true);