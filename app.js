let numeroSecreto = 5;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute > 10){
        alert('Escolha um número de 1 a 10 !! ')
    }else if (chute == numeroSecreto){
        alert('Parábens, Você acertou o número ! ')
    }else {
        alert('Tente novamente!! ')
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}