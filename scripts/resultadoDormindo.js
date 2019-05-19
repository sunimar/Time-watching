 window.onload = function (){
	 carregaDormindo();
 }


function carregaDormindo () {

		var numTemp = localStorage.getItem("numTemp");
		var numEps = localStorage.getItem("numEps");
		var tempEps = localStorage.getItem("tempEps");

	  var total = parseInt(localStorage.getItem("total"));
	  var nome = localStorage.getItem("nome");
	  var horas = parseInt(localStorage.getItem("horas"));
	  var dias = parseInt(localStorage.getItem("dias"));

	  var minutos = localStorage.getItem("minutos");

	  var aux = (dias*7);
	  total = aux + total;
	  console.log(total);
	  var dias = Math.trunc((total/60)/24);
	  var total1 = total - dias*24*60;
		var horas = Math.trunc((total1/60));
		var total2 = total1 - horas*60;
		var minutos = total2;

    dias = parseInt(dias) < 10 ? ("0" + dias) : dias;
    horas = parseInt(horas) < 10 ? ("0" + horas) : horas;
    minutos = parseInt(minutos) < 10 ? ("0" + minutos) : minutos

	document.getElementById('nome').innerHTML = nome;
    document.getElementById('days').innerHTML = dias;
    document.getElementById('hours').innerHTML = horas;
	document.getElementById('minutes').innerHTML = Math.trunc(minutos);
	
	document.getElementById('numTemp').innerHTML = numTemp;
	document.getElementById('numEps').innerHTML = numEps;
	document.getElementById('tempEps').innerHTML = tempEps;

}
