 window.onload = function (){
	 carrega();
 }
 
 
 function carrega(){
      var nome = localStorage.getItem("nome");
      var dias = localStorage.getItem("dias");
      var horas = localStorage.getItem("horas");
      var minutos = localStorage.getItem("minutos");

      document.getElementById('nome').innerHTML = nome;
      document.getElementById('days').innerHTML = dias;
      document.getElementById('hours').innerHTML = horas;
      document.getElementById('minutes').innerHTML = minutos;
}
