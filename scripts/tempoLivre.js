window.onload = function (){
    calcular();
}


function calcular(){
    var total = parseInt(localStorage.getItem("total"));
    var tempoLivre = parseInt(localStorage.getItem("tlivre"));
    var result = Math.trunc((total/60)/tempoLivre);
    result = parseInt(result) < 10 ? ("0" + result) : result;
    $("#tempoLivre").text(result);
}
