
const cartoes = document.querySelectorAll('.cartao');
function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selected');
    cartaoSelecionado.classList.remove('selected');
}
function mostrarCatao(indiceCartao){
    cartoes[cartaoAtual].classList.add('selected');
}
let cartaoAtual = 0;
document.querySelector('#btn-avancar').addEventListener('click',function(){
   
    if(cartaoAtual === cartoes.length -1)
        cartaoAtual = -1;
    
    esconderCartaoSelecionado();
    cartaoAtual++
      mostrarCatao(cartaoAtual);
      
});


document.querySelector('#btn-voltar').addEventListener('click',function(){
    const cartaoSelecionado = document.querySelector('.selected');
    console.log(cartoes)
    if(cartaoAtual === 0)
    cartaoAtual = cartoes.length;
    
    cartaoSelecionado.classList.remove('selected');
    cartaoAtual--
     mostrarCatao(cartaoAtual);
      
});