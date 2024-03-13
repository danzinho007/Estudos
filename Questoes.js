// Questões JavaScript :

console.log("Soma de 3 variáveis na tela") 
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
const nomeR = 'Raquel'
const idadeD = 18
const nomeD = 'Daniel'

if (  idadeR >= 18 && nomeR === 'Daniel') {
    console.log("Raquel pode entrar")
} else {
    console.log("Raquel não pode entrar, devido a idade ou nome")
}

if (  idadeD >= 18 && nomeD === 'Daniel') {
    console.log("Daniel pode entrar")
} else {
    console.log("Daniel não pode entrar, devido a idade ou nome")
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

// 5- Dados os valores do 3, coloque os em ordem crescente e depois diga qual é o 1° e 3° elemento mais a quantidade de pessoas que tem  
// 6- De 2 maneiras diferentes : Converta um número em uma string
// 7- De 2 maneiras diferentes : Converta uma string em um número
// 8- */ 
