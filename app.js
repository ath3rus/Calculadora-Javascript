function inserir(numero) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(numero) {
    document.getElementById('resultado').innerHTML = "⠀";
}

function del(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function casa(){
    document.getElementById('resultado').innerHTML = "casa";
}