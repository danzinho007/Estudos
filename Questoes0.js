// Questões JavaScript 
/* 
'' = Aspas simples
" " = Aspas duplas
CTRL + ALT + N = Executar o arquivo js
*/

console.log('1- Soma de 4 variáveis na tela') 

const n1 = 10 // tipo de variável de n1 que não pode ser alterada e n1 recebendo 10 ( = se lê recebe )
var n2 = 20 
let n3 = 30
    n4 = 40
soma = n1 + n2 + n3 + n4
console.log('A soma de n1 + n2 + n3 + n4 é :',n1+n2+n3+n4)
console.log('A soma de n1 + n2 + n3 + n4 é :',soma)
console.log('A soma de',n1,'+',n2,'+',n3,'+',n4,'é :',soma)
console.log('A soma de n1',n1,'+ n2',n2,'+ n3',n3,'+ n4',n4,'é :',soma)
console.log('')

/*
Operadores :
-Aritméticos : + - * / % **
Adição (+) > 5 + 2 = 7 
Subtração (-) > 5 - 2 = 3
Multiplicação (*)  > 5 * 2 = 10
Divisão (/) > 5 / 2 = 2.5
DivisãoInteira (%) ( Resto da Divisão ) 5 / 2 = 1 
   5  | 2  >>> 5 é Dividendo 
  -4  | 2.5 >>> 2 é Divisor 
   10 |     >>> 2.5 é Quociente
  -10 |     >>> 0 é resto
    0 |
Potenciação (**) 5² = 5 x 5 = 25
                 5³ = 5 x 5 x 5 = 125

-Atribuição : Atribuindo valores 
let n = 1
n = n + 4 é igual a : n += 4

-Relacionais : 

Comparações :
> < >= <= == !=
> 18 é 19 ou +
< 18 é 17 ou -
>= 18 é 18 ou +
<= 18 é 18 ou -
== 18 é 18
!= 18 é 18- ou 18+

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

Conjunção : & e ( E comercial : tab + 7 )
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
média >= 7.0 ? "Aprovado" : Reprovado

Ordem de Precedência :
1-Aritmético
2-Relacionais ( Quem aparecer primeiro faz, ordem da esquerda pra direita )
3.1-Lógicos :
  1-Não
  2-E
  3-Ou
4-Ternário

*** Ordem de Precedência :
obs1: O que vier primeiro em 3° ou 4°

1-Parênteses ()
2-Potenciação **
3-Multiplicação, Divisão ou DivisãoInteira
4-Adição ou Subtração

*/

console.log("Extra : Metade de 2 mais 2")

let num1 = 2
var num2 = 2
resultado = ( num1 + num2 ) / 2
correto = 1/2 * num1 + num2
console.log("Metade de 2 mais 2 incorreto é :",resultado)
console.log("Metade de 2 mais 2 correto é :",correto)
console.log("")

console.log("Extra : Triplo da metade de 2 + 2")

let num3 = 2
var num4 = 2
resultado1 = 3 * 1/2 * num1 + num2
console.log("Triplo da metade de 2 + 2 :",resultado1)
console.log("")

console.log("2- 2 maneiras diferentes : Atribuir um valor pra uma variável e depois alterar esse valor")

const x1 = 100
let x2   = 200
var x3   = 300
    x4   = 400

// x1 = 200 TypeError: Assignment to constant variable.
x2 = 300
x3 = 400
x4 = 500

console.log("O valor de x1 antes era 100 agora é :", x1)
console.log("O valor de x2 antes era 200 agora é :", x2)
console.log("O valor de x3 antes era 300 agora é :", x3)
console.log("O valor de x4 antes era 400 agora é :", x4)
console.log("")

console.log(" 3- Escreva um programa que só permita a entrada de pessoas com 18, acima de 18 e que sejam chamadas de Pedro") 
console.log("Faça um teste com João 16 anos, Pedro 18 e Daniel 20")

const idadeJ = 16
const nomeJ = 'Joao'
const idadeP = 18
const nomeP = 'Pedro'
const idadeD = 20
const nomeD = 'Daniel'

if ( idadeJ >= 18 && nomeJ === 'Pedro'){
    console.log("João pode entrar ? Entrada autorizada")
} else {
    console.log("João pode entrar ? Entrada não autorizada")
}

if ( idadeP >= 18 && nomeP === 'Pedro'){
    console.log("Pedro pode entrar ? Entrada autorizada")
} else {
    console.log("Pedro pode entrar ? Entrada não autorizada")
}

if ( idadeD >= 18 && nomeD === 'Pedro'){
    console.log("Daniel pode entrar ? Entrada autorizada")
} else {
    console.log("Daniel pode entrar ? Entrada não autorizada")
}
console.log("")

console.log("4- Calcular a soma de 1 até 10 de 3 formas diferentes")
for while do while

console.log("5- Dados os valores do 3, coloque os em ordem crescente e depois diga qual é o 1° e 3° elemento mais a quantidade de idades que tem")
Array

console.log("6- De 2 maneiras diferentes : Converta um número em uma string")
typeof
tofixed(2)


console.log("7- De 2 maneiras diferentes : Converta uma string em um número")
typeof
tofixed(2)
Number