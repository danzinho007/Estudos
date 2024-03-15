// Questões JavaScript :

console.log("1- Soma de 3 variáveis na tela") 
var n1 = 10
const n2 = 20
let n3 = 30
console.log(n1 + n2 + n3)

console.log("2- 2 maneiras diferentes : Atribuir um valor pra uma variável e depois alterar esse valor")

let n4 = 50
n4 = 60
console.log(n4)

if ( n4 === 60 ){
    n4 = 70
}
console.log(n4)

console.log(" 3- Escreva um programa que só permita a entrada de pessoas com 18, acima de 18 ou que sejam chamadas de Daniel e faça um teste com Raquel 16 anos e Daniel 18")

const idadeR = 16
const nomeR = 'Pedro'
const idadeD = 18
const nomeD = 'João'

if (  idadeR >= 18 && nomeR === 'João') {
    console.log("Pedro pode entrar")
} else {
    console.log("Pedro não pode entrar, devido a idade ou nome")
}

if (  idadeD >= 18 && nomeD === 'João') {
    console.log("João pode entrar")
} else {
    console.log("João não pode entrar, devido a idade ou nome")
}

console.log("4- Calcular a soma de 1 até 10 de 3 formas diferentes")

let num1 = 1
let soma1 = 0

for (let i = 1; i < 10; i = i + 1){
    console.log(i)
}
for (let i = 1; i < 10; i++){
    soma1 = soma1 + i
    console.log(i, '+', soma1 - i,'=', soma1)
} console.log("Usando for o resultado é :", soma1)

let soma2 = 0

while(num1 < 10 ){
    soma2 += num1 // Isso é soma2 = soma2 + num1
    console.log(num1, "+", soma2 - num1, "=", soma2);
    num1++
} 
console.log('Usando while :', soma2)

let num2 = 1
let soma3 = 0

do {
    soma3 += num2
    console.log(num2,'+',soma3 - num2,'=',soma3)
    num2++
} while ( num2 < 10)
console.log('Usando do ... while :', soma3)

console.log("5- Dados os valores do 3, coloque os em ordem crescente e depois diga qual é o 1° e 3° elemento mais a quantidade de idades que tem")

const idades = [16, 18]

console.log('O primeiro elemento é :',idades[0],'e o segundo elemento é :', idades[1],'a quantidade de pessoas é :', idades.length)

console.log("6- De 2 maneiras diferentes : Converta um número em uma string")

const salario1 = 103

console.log("Tipo de variável de salario1 é :",typeof salario1)
console.log("Tipo de variável de salario1 é : R$",salario1.toFixed(2),typeof salario1.toFixed(2))
console.log("Tipo de variável de salario1 é : R$",salario1.toFixed(2),typeof salario1.toFixed)
console.log("Tipo de variável de salario1 é : R$",salario1.toFixed(2),typeof toFixed)

console.log("7- De 2 maneiras diferentes : Converta uma string em um número")

const salario2 = '104'

console.log("Tipo de variável de salario2 é :",typeof salario2)
console.log("Tipo de variável de salario2 agora é :", typeof Number(salario2))

const salario3 = Number('104')

console.log("Tipo de variável de salario2 é :",typeof salario3)

// 8- */ 
