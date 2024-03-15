// Executar : CTRL + ALTN + N 
console.log('Olá mundo')

var x = 1;
var y = 3;
console.log(x + y)

const w = 1;
const z = 3;
console.log(w + z)

// Não se pode declarar variável mais de uma vez em Javascript, para alterar o valor de uma variável já declarada deve se fazer assim :
// let a = 10 
// a = 20
// Se fizer console.log(x) irá aparecer 20, pois ele foi alterado
// Lembrando que isso é apenas um exemplo, há diversar maneiras de alterar com outros comandos

let a = 10;
a = 20;
console.log(a)

const c = 1;
const d = 2;
const soma = c + d;
console.log('O resultado da soma é :',soma);

// Para comitar : 
// 1-git status
// 2-git add .
// 3-git commit -m "feat: aula02"
// 4-git push

// Executar : CTRL + ALTN + N 

const numero1 = 1;
// const é uma constante que não muda
let numero2 = 2;
// let pode ser alterado
// let pesa mais que const
// Um exemplo disso é um CD normal e um CD regravável, no Normal não tem como apagar, no outro poderá ser apagado várias vezes

if (numero1 === 1) {
    numero2 = 6
}
// Lendo isso acima :
// Se o conteúdo da variável numero1 for igual a 1, então altere o valor da variável numero2 para 6 se puder
// Como numero2 está guardado num let, ele pode ser alterado, logo ele será alterado

console.log('O número 2 vale', numero2)

if (numero2 === 6) {
    numero1 = 4
}

console.log('O número 1 vale', numero1)
// Isso acima dará erro, pois o numero1 está guardado numa constante, logo não pode ser alterado

// Caso 1
const idade1 = 18;
let Entrou1 = false;

// Teste lógico :
if(idade1 >= 18) {
    Entrou1 = true;
} else {
    console.log('Não entrou !')
}
// Se a idade for 18 ou maior o conteúdo da variável Entrou1 irá mudar pra true
// Se a idade for 17 ou menos o conteúdo da variável não irá mudar e vai aparecer a mensagem 
console.log('O usuário pode entrar ?', Entrou1)

// Caso 2
const idade2 = 15;
let Entrou2 = false;

// Teste lógico :
if(idade2 >= 18) {
    Entrou2 = true;
} else {
    console.log('Não entrou !')
}

// Caso 3

const idade3 = 15;
const nome1 = 'Daniel';
let Entrou3 = false;

// Teste lógico : || = ou
// Algum precisa ser verdadeiro pra dar verdadeiro
if(idade3 >= 18 || nome1 === 'Daniel') {
    Entrou3 = true;
    console.log('Entrada autorizada Sr Daniel')
} else {
    console.log('Não entrou !')
}

// Caso 4
const idade4 = 15;
const nome2 = 'Daniel';
let Entrou4 = false;

// Teste lógico : && = e
// Os 2 precisam ser verdadeiros pra dar verdadeiro
if(idade4 >= 18 && nome === 'Daniel') {
    Entrou4 = true;
    console.log('Entrada autorizada Sr Daniel')
} else {
    console.log('Não entrou !')
}
