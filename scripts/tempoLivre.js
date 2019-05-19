window.onload = function (){
    calcular();
}


function calcular(){
    var total = parseInt(localStorage.getItem("total"));
    var tempoLivre = parseInt(localStorage.getItem("tlivre"));
    var result = Math.trunc((total/60)/tempoLivre);
    result = parseInt(result) < 10 ? ("0" + result) : result;
    $("#tempoLivre").text(result);

    var nome = localStorage.getItem("nome");
    var numTemp = localStorage.getItem("numTemp");
    var numEps = localStorage.getItem("numEps");
    var tempEps = localStorage.getItem("tempEps");

    document.getElementById('nome').innerHTML = nome;
    document.getElementById('numTemp').innerHTML = numTemp;
	document.getElementById('numEps').innerHTML = numEps;
	document.getElementById('tempEps').innerHTML = tempEps;

}
