var busca = $(".busca");

// pega o valor inicial da altura da barra de busca que está no estilo da classe
var alturaBuscaDesativada = busca.css("height");

var tituloBusca = $("#titulo-busca");
var formBusca = $(".form-busca");

var botaoBuscaAtivado, botaoBuscaClicar;

$(function(){
  // controle do comportamento do botao de busca
  botaoBuscaAtivado = true;

  // controle da acao de clique do botao de busca
  botaoBuscaClicar = false;
});

$(".botao-mostra-busca").click(function(){
  busca.css("height", "");

  if (botaoBuscaAtivado) {
      botaoBuscaClicar = true // ativa o clique para mostrar a busca
  } else {
      botaoBuscaClicar = false // desativa o clique para esconder a busca
  }

  if (botaoBuscaClicar) {
    ativaBusca();
  } else {
    desativaBusca();
  }
});

function ativaBusca() {
  busca.addClass("busca-ativada");
  busca.removeClass("busca-desativada");

  tituloBusca.css("visibility", "visible");
  tituloBusca.addClass("ativado-slow");
  tituloBusca.removeClass("desativado-slow");

  formBusca.css("visibility", "visible");
  formBusca.addClass("ativado-slow");
  formBusca.removeClass("desativado-slow");

  // desativa o botao para no proximo clique desativar a busca
  botaoBuscaAtivado = false;
}

function desativaBusca() {
  busca.addClass("busca-desativada");
  busca.css("height", alturaBuscaDesativada);
  busca.removeClass("busca-ativada");

  tituloBusca.css("visibility", "hidden");
  tituloBusca.addClass("desativado-slow");
  tituloBusca.removeClass("ativado-slow");

  formBusca.css("visibility", "hidden");
  formBusca.addClass("desativado-slow");
  formBusca.removeClass("ativado-slow");

  // ativa o botao para no proximo clique ativar a busca
  botaoBuscaAtivado = true;
}
