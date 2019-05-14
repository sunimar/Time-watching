 window.onload = function (){
	 outrasAtividades();
 }
 
 function outrasAtividades() {
	var total = localStorage.getItem("total");
	total=total/60;
	var caminhada = total*240;
	var natacao = total*500;
	var danca = total*605;
	var musculacao = total*300;
	var bike = total*240;
	
	document.getElementById('caminhada').innerHTML = caminhada.toFixed(2);
    document.getElementById('natacao').innerHTML = natacao.toFixed(2);
    document.getElementById('danca').innerHTML = danca.toFixed(2);
    document.getElementById('bike').innerHTML = bike.toFixed(2);
	document.getElementById('musculacao').innerHTML = musculacao.toFixed(2);
 }