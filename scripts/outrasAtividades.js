 window.onload = function (){
   $("#botao-result").click(outrasAtividades);
 }

 function outrasAtividades() {
	var total = localStorage.getItem("total");
	total = parseInt(total)/60;

	var jogar = total*100;
  var danca = total*324;
	var tocar = total*148;
	var esportes = total*400;
	var ler = total*120;

  var checkJogos = $("#check-jogos").prop("checked");
  var checkDanca = $("#check-danca").prop("checked");
  var checkInstrumento = $("#check-instrumento").prop("checked");
  var checkEsportes = $("#check-esportes").prop("checked");
  var checkLeitura = $("#check-leitura").prop("checked");

  $("#checkboxes-div-container").hide();
  $("#container-resultados").show();

  checkJogos ? $("#resultado-jogos").show() : $("#resultado-jogos").hide();
  checkDanca ? $("#resultado-danca").show() : $("#resultado-danca").hide();
  checkInstrumento ? $("#resultado-instrumento").show() : $("#resultado-instrumento").hide();
  checkEsportes ? $("#resultado-esportes").show() : $("#resultado-esportes").hide();
  checkLeitura ? $("#resultado-leitura").show() : $("#resultado-leitura").hide();

	document.getElementById('jogos-print').innerHTML = Math.trunc(jogar);
  document.getElementById('danca-print').innerHTML = Math.trunc(danca);
  document.getElementById('instrumento-print').innerHTML = Math.trunc(tocar);
  document.getElementById('esporte-print').innerHTML = Math.trunc(esportes);
	document.getElementById('leitura-print').innerHTML = Math.trunc(ler);
 }
