const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const mudarBotaoTema = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {
    if(body.classList.contains("modo-escuro")){
        body.classList.remove("modo-escuro");
        mudarBotaoTema.setAttribute("src", "./src/img/sun.png");
    }
    else{
        body.classList.add("modo-escuro");
        mudarBotaoTema.setAttribute("src", "./src/img/moon.png");
    }
    
});
