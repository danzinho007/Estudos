
// Observações :
// '' = Aspas simples
// " " = Aspas duplas
// CTRL + ALT + N = Executar o arquivo js
// 1- Instalar o CodeRunner pra executar com CTRL+ALT+N ou clicando na seta
/* 2- Comentar arquivo tipo javascript ( js )
    ou /* */
/* 3- Comando para xibir algo na tela
// console.log()
// 4- Usar var, const e let como variáveis e falar a diferença entre elas
// var = pode ser alterada
// const = não pode ser alterad
// let = pode ser alterada
// 5- Comentar os 6 tipos de operadores Aritméticos 
// + - * / % **
/* -Aritméticos : + - * / % **
Adição (+) > 5 + 2 = 7 
Subtração (-) > 5 - 2 = 3
Multiplicação (*)  > 5 - 2 = 3
Divisão (/) > 5 / 2 = 2.5
DivisãoInteira (%) ( Resto da Divisão ) 5 / 2 = 1
Potenciação (**) 5² = 25
-Atribuição : Atribuindo valores 
n = n + 4 ou
n += 4
-Relacionais : 
Comparações :
> < >= <= == !=
Identidade : 
Igual a : 5 == 5   > True
Valor igual : a5 == '5' > True, aqui ele vê o valor
Idêntico : 5 === '5' > False, aqui além do valor, ele vê o tipo, 5 é número, '5' é string
Idêntico : 5 === 5 > True
Desigual restrito : Sendo x = 5 e y = '5'
x !== y é True, tipos diferentes, mas valores iguais

-Lógicos :
Negação :
Se for V é Falso
Se for F é Verdadeiro
Conjunção : & e
V + V = V
V + F = F
F + V = F
F + F = F
Disjunção : !! Ou
V + V = V
V + F = V
F + V = V
F + F = F

-Ternário :
Se for V, faz True
Se for F, faz False
média >= 7.0 ? "Aprovado" : Reprovador

Ordem de Precedência :
1-Aritmético
2-Relacionais ( Quem aparecer primeiro faz, ordem da esquerda pra direita )
3.1-Lógicos :
  1-Não
  2-E
  3-Não
4-Ternário

*** Ordem de Precedência :
obs1: O que vier primeiro em 3° ou 4°

1-Parênteses ()
2-Potenciação **
3-Multiplicação, Divisão ou DivisãoInteira
4-Adição ou Subtração

*/
// 6- Usar na questão 2 :
/*
if ( numero1 === 1){
    numero1 = 2
}

*/
/* 7- Usar na questão 3 :

if ( idadeR >= 18 && nomeR === 'João') {
    console.log("")
} else {
    console.log("")
}
*/
soma = n1 + n2 + n3 + n4
num1 até num 4

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


// 7- Usar o if (condição){alteração} els{alteração}
// 8- Usar o for (variável,validação,alteração){}, while (condição){alteração} e do{Alteração}while (condição)
// 9- Explicar primeiro sem a soma : Primeiro se atribui os valores, depois se soma
/*  
for (let i = 1; i < 10; i = i + 1){
    console.log(i)
} 
*/ 

/* 
num1 = 1 e soma2 = 0
1- Enquanto num1 < 10 faça :
1.1 soma2 = soma2 + num1 
1.2 Mostre num1 ( 1 ) + soma2 - num1 ( 1 - 1) = soma2 ( 1 )
1.3 Adicionar 1 no num1

1° > 1 + 0 = 1
num1 agora é 2
soma2 agora é 3
2° > 2 + 1 = 3

do while :










*/