const container = document.getElementById("coracoes");


// Quantidade de corações
const quantidadeInicial = 20;


// =========================================
// CRIAR CORAÇÃO
// =========================================

function criarCoracao() {

    const coracao = document.createElement("span");

    coracao.classList.add("coracao-caindo");

    coracao.innerHTML = "♥";


    // Posição horizontal aleatória

    coracao.style.left =
        Math.random() * 100 + "vw";


    // Tamanho aleatório

    const tamanho =
        Math.random() * 16 + 10;

    coracao.style.fontSize =
        tamanho + "px";


    // Velocidade aleatória

    const duracao =
        Math.random() * 5 + 5;

    coracao.style.animationDuration =
        duracao + "s";


    // Transparência aleatória

    coracao.style.opacity =
        Math.random() * 0.4 + 0.2;


    // Adiciona na camada

    container.appendChild(coracao);


    // Remove depois da animação

    setTimeout(() => {

        coracao.remove();

    }, duracao * 1000);

}


// =========================================
// CORAÇÕES INICIAIS
// =========================================

for (
    let i = 0;
    i < quantidadeInicial;
    i++
) {

    setTimeout(() => {

        criarCoracao();

    }, i * 300);

}


// =========================================
// NOVOS CORAÇÕES
// =========================================

setInterval(() => {

    criarCoracao();

}, 150);