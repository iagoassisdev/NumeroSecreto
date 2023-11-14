let listaNumeroSorteado = [];
let limiteLista = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 20');
}

mensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute > 20 || chute < 1){
        exibirTextoNaTela('h1', 'Erro na escolha');
        limparCampo();
    }else if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteLista + 1);
   let quantidadeElementosLista = listaNumeroSorteado.length;

   if (quantidadeElementosLista == limiteLista){
    listaNumeroSorteado = [];
   } 

   if (listaNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else {
    listaNumeroSorteado.push(numeroEscolhido);
    return numeroEscolhido;
   }
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}