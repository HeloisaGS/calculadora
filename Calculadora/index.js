//Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
//1. Soma
//2. Subtração
//3. Multiplicação
//4. Divisão
//Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

function calculadora (num1, num2, operador){
    if (operador == 1){
        return num1 + num2
    } else if (operador == 2){
        return num1 - num2
    } else if (operador == 3){
        return num1 * num2
    } else if (operador == 4){
        return num1 / num2
    } else{
        return 0 //a operação não existe
    }
}

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))
let operador = Number(prompt("Digite o número correspondente a operação (1. Soma, 2. Subtração, 3. Multiplicação, 4. Divisão)"))

const resultado = calculadora(num1, num2, operador)
console.log ("O resultado da operação é: ", resultado)
