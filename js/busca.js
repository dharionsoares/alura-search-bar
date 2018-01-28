var elementosBusca = $('.busca, .titulo-busca, .form-busca');
var botaoBuscaAtivado = true;

$(function(){
    $('.botao-mostra-busca').click(function(){
        alteraStatusBusca();
    });
});

function alteraStatusBusca() {
    botaoBuscaAtivado = (botaoBuscaAtivado) ? false : true;

    elementosBusca.toggleClass('on');
}
