 window.onload = function (){
	 carregaDormindo();
 }
 

function carregaDormindo () {
	  var total = localStorage.getItem("total");
	  var nome = localStorage.getItem("nome");
	  var horas = localStorage.getItem("horas");
	  var dias = localStorage.getItem("dias");
	  
	  var minutos = localStorage.getItem("minutos");
	  
	  var aux = (dias*7);
	  total = aux + total;
	  var dias = Math.trunc((total/60)/24);
	  var total1 = total - dias*24*60;
		var horas = Math.trunc((total1/60));
		var total2 = total1 - horas*60;
		var minutos = total2; 
	  document.getElementById('nome').innerHTML = nome;
      document.getElementById('days').innerHTML = dias;
      document.getElementById('hours').innerHTML = horas;
      document.getElementById('minutes').innerHTML = minutos.toFixed(2);
		  
}