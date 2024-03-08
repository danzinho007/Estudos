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
