function sumar() {
    var num1 = parseFloat(document.getElementById('numero1').value);

    var num2 = parseFloat(document.getElementById('numero2').value);

    var resultado = num1 + num2;

    mostrasResultado(resultado);
}

function restar() {
    var num1 = parseFloat(document.getElementById("numero1").value);

    var num2 = parseFloat(document.getElementById("numero2").value);

    var resultado = num1 - num2;

    mostrasResultado(resultado);
}

function multiplicar(){
    var num1 = parseFloat(document.getElementById("numero1").value);

    var num2 = parseFloat(document.getElementById("numero2").value);

    var resultado = num1 * num2;

    mostrasResultado(resultado);
}

function dividir() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    if (num2 === 0){
        mostrasResultado('No es posible dividir entre 0');
    }
    else {
        var resultado = num1 / num2;

        mostrasResultado(resultado);
    }
   
}

function mostrasResultado(resultado){
    document.getElementById('resultado').innerHTML = 'Resultado:' + resultado.tofixed(2);
 }