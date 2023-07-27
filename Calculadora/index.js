//Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
//1. Soma
//2. Subtração
//3. Multiplicação
//4. Divisão
//Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

let num1 = prompt("Digite um número para a operação: ")
let num2 = prompt("Digite outro número para a operação: ")
let operador = prompt("Digite o número correspondente a operação que você gostaria de realizar(1.Soma, 2. Subtração, 3. Multiplicação ou 4. Divisão)")

if (operador == 1){
    console.log(Number(num1) + Number(num2))
} else if (operador == 2){
    console.log(Number(num1) - Number(num2))
} else if (operador == 3){
    console.log(Number(num1) * Number(num2))
} else if (operador == 4){
    console.log(Number(num1) / Number(num2))
} else{
    console.log(0) //a operação não existe
}

