window.alert ("oi mundo")
// este barra barra é para fazer comentários de linha unica
/* está asteristico e barra é para fazer comentarios em várias linhas e finaliza */

//OBJETIVO 1 - QUANDO CLICAR NO BOTÃO DO PERSONAGEM NA LISTA, MARCAR O BOTÃO COMO SELECIONADO - PASSO 1 - PEGAR O BOTÕES NO JS PRA PODER VERIFICAR QUANDO O USUÁRIO CLICAR EM CIMA DE UM DELES  - PASSO 2 - ADICIONAR A CLASSE "SELECIONADO" MP BOTÃO QUE O USUÁRIO CLICOU -PASSO 3 - VERIFICAR SE JÁ EXISTE UM BOTÃO SELECIONADO, SE SIM, DEVEMOS REMOVER A SELEÇÃO DELE

//OBJETIVO 1
const botoes = document.querySelectorAll(".botao");
// OBJETIVO 2
const personagens = document.querySelectorAll(".personagem");

//OBJETIVO 1
botoes.forEach((botao, indice)=> {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        botao.classList.add("selecionado");
// Objetivo 2 - passo 3
        desselecionarPersonagem();


// Objetivo 2 - passo 2
personagens[indice].classList.add("selecionado");
    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
//BOJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
// passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele - passo 2 - adicionar a classe "selecionado" no personagem selecionado, se sim, devemos remover a seleção dele