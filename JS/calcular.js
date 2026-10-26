/*
Operadores aritméticos:
+ Soma 
- Subtração
* Multiplicação
/ Divisão
++ Incremento (soma mais 1)
-- Decremento (subtrai menos 1)

Operadores de Atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual 
*= multiplicado ou igual

Operadores de sequência:
+ (serve para concatenar valores
    (string ou variáveis)
- ( serve para subtrair valores
    ( string ou variáveis))

Operadores de comparação:
RETORNA TRUE (VERDADEIRO) OU FALSE ( FALSO)

== comparar 2 valores
=== comparar valores e tipos de dados
!= diferente de valores apenas
!== comparar diferença de valores e tipos de dados

<menor  > Maior 
<= menor ou igual   >= maior ou igual
*/


function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;

    document.getElementById("resultado").textContent = resultado;
    if (resultado < 0) {
    corResultado.style.backgroundColor = "red";
} else {
    corResultado.style.backgroundColor = "lightgreen";
}
}


function subtrair() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;

    document.getElementById("resultado").textContent = resultado;
    if (resultado < 0) {
    corResultado.style.backgroundColor = "red";
} else {
    corResultado.style.backgroundColor = "lightgreen";
}
}


function dividir() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
        document.getElementById("resultado").textContent = "Não é possível dividir por zero";
        return;
    }

    let resultado = n1 / n2;

    document.getElementById("resultado").textContent = resultado;

    if (resultado < 0) {
    corResultado.style.backgroundColor = "red";
} else {
    corResultado.style.backgroundColor = "lightgreen";
}
}


function multiplicar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;

    document.getElementById("resultado").textContent = resultado;

    if (resultado < 0) {
    corResultado.style.backgroundColor = "red";
} else {
    corResultado.style.backgroundColor = "lightgreen";
} 
}


function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").textContent = "--";
    if (resultado < 0) {
    corResultado.style.backgroundColor = "red";
} else {
    corResultado.style.backgroundColor = "lightgreen";
}
}

const corResultado = document.getElementById("resultado");