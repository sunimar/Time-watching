$(document).ready(function(){
	$("#numTemporadas").mask("#");
	$("#numEpisodios").mask("#");
	$("#tempoEpisodio").mask("#");
});

function habilitaBtn () {
	var op1 = document.getElementByName("entrada").value;
	var op2 = document.getElementByName("numTemporadas").value;
	var op3 = document.getElementByName("numEpisodios").value;
	var op4 = document.getElementByName("tempoEpisodio").value;
	if(op1!=null&&op2!=null&&op3!=null&&op4!=null)
	{
		if(!document.getElementsByName('Botao')[0].disabled) 
			document.getElementsByName('Botao')[0].disabled = true;              
	}
}
	function enviardados(event){
		event.preventDefault();
		if( document.getElementsByName('entrada')[0].value=="" ||   document.getElementsByName('entrada')[0].value == undefined || document.getElementsByName('entrada')[0].value.length < 2)
		{
			alert( "Preencha campo \"Nome da Série\" corretamente! Não deixe valores em branco e nem menos do que 2 letras" );
			document.getElementsByName('entrada')[0].focus();
			return false;
		}
		else if(document.getElementsByName('numTemporadas')[0].value=="" || document.getElementsByName('numTemporadas')[0].value == undefined || document.getElementsByName('numTemporadas')[0].value.length < 1)
		{
			alert( "Preencha campo\"Quantidade de Temporadas\" corretamente!" );
			document.getElementsByName('numTemporadas')[0].focus();
			return false;
		}else if(document.getElementsByName('numEpisodios')[0].value=="" || document.getElementsByName('numEpisodios')[0].value == undefined || document.getElementsByName('numEpisodios')[0].value.length < 1)
		{
			alert( "Preencha campo \"Episódios por Temporada\" corretamente!" );
			document.getElementsByName('numEpisodios')[0].focus();
			return false;
		}else if(document.getElementsByName('tempoEpisodio')[0].value=="" || document.getElementsByName('tempoEpisodio')[0].value == undefined || document.getElementsByName('tempoEpisodio')[0].value.length < 1)
		{
			alert( "Preencha campo \"Tempo por Episódio\" corretamente!" );
			document.getElementsByName('tempoEpisodio')[0].focus();
			return false;
		} else {
			//alert( "Resultado gerado com sucesso!" );
			var cadeia = document.getElementsByName('entrada')[0].value;
			var numTemporadas = document.getElementsByName('numTemporadas')[0].value;
			var numEpisodios = document.getElementsByName('numEpisodios')[0].value;
			var tempoEpisodio = document.getElementsByName('tempoEpisodio')[0].value;

			var total = (tempoEpisodio*numEpisodios)*numTemporadas;
			var dias = Math.trunc((total/60)/24);
			var total1 = total - dias*24*60;
			var horas = Math.trunc((total1/60));
			var total2 = total1 - horas*60;
			var minutos = total2; 
			localStorage.setItem("nome",cadeia);
			localStorage.setItem("dias",dias);
			localStorage.setItem("horas",horas);
			localStorage.setItem("minutos",minutos);
			localStorage.setItem("total",total);
			window.location.href="resultado.html";
		}
	}
	
	
function FocusOnInput(){
	document.getElementsByName('entrada')[0].focus();
}
