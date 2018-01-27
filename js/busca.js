var busca = $(".busca");

// pega o valor inicial da altura da barra de busca que está no estilo da classe
var alturaBuscaDesativada = busca.css("height");

var tituloBusca = $(".titulo-busca");
var formBusca = $(".form-busca");

var botaoBuscaAtivado, botaoBuscaClicar;

$(function(){
  // controle do comportamento do botao de busca
  botaoBuscaAtivado = true;

  // controle da acao de clique do botao de busca
  botaoBuscaClicar = false;
});

$(".botao-mostra-busca").click(function(){
  busca.css("height", ""); // limpa o tamanho para ficar de acordo com a ativacao/desativacao

  if (botaoBuscaAtivado) {
      botaoBuscaClicar = true // ativa o clique para mostrar a busca
  } else {
      botaoBuscaClicar = false // desativa o clique para esconder a busca
  }

  if (botaoBuscaClicar) {
    alteraStatusBusca("on", "off");
  } else {
    alteraStatusBusca("off", "on");
  }
});

function alteraStatusBusca(mostra, esconde) {
  if (mostra == "on") {
    busca.addClass("busca-ativada").removeClass("busca-desativada");
  } else {
    busca.addClass("busca-desativada").removeClass("busca-ativada").css("height", alturaBuscaDesativada);
  }

  tituloBusca.addClass(mostra).removeClass(esconde);
  formBusca.addClass(mostra).removeClass(esconde);

  if (mostra == "on") {
    botaoBuscaAtivado = false; // desativa o botao para no proximo clique desativar a busca
  } else {
    botaoBuscaAtivado = true; // ativa o botao para no proximo clique ativar a busca
  }
}
