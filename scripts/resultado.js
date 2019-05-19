 window.onload = function (){
       carrega();
 }


 function carrega(){
      var nome = localStorage.getItem("nome");
      var dias = localStorage.getItem("dias");
      var horas = localStorage.getItem("horas");
      var minutos = localStorage.getItem("minutos");

      var numTemp = localStorage.getItem("numTemp");
      var numEps = localStorage.getItem("numEps");
      var tempEps = localStorage.getItem("tempEps");

      dias = parseInt(dias) < 10 ? ("0" + dias) : dias;
      horas = parseInt(horas) < 10 ? ("0" + horas) : horas;
      minutos = parseInt(minutos) < 10 ? ("0" + minutos) : minutos;

      document.getElementById('nome').innerHTML = nome;
      document.getElementById('days').innerHTML = dias;
      document.getElementById('hours').innerHTML = horas;
      document.getElementById('minutes').innerHTML = minutos;

      document.getElementById('numTemp').innerHTML = numTemp;
      document.getElementById('numEps').innerHTML = numEps;
      document.getElementById('tempEps').innerHTML = tempEps;
}

function tempoLivre() {
      var horas = prompt("Média de horas livres por dia:");
      localStorage.setItem("tlivre", horas);
}
