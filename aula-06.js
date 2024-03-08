const quantidade = 10;
let soma = 0;

for(let i = 1; i < quantidade; i++){
    soma = soma + i
    console.log(i, '+', soma - i, '=', soma);
}
console.log('Fim', soma);

// Explicação
// 1 + 0 = 1
// O i começando com 1, a soma começa com 0 adiciona i, se torna 1, mas antes de aparecer ela perde o valor de i ( 1 ) no console.log, logo aparece 0, porém na variável soma o valor é 1, por isso aparece 1 0 1

const quantidade1 = 100;
let soma1 = 0;

for(let i = 1; i <= quantidade1; i++){
    soma1 = soma1 + i
    console.log(i, '+', soma1 - i, '=', soma1);
}
console.log('Fim, a soma de 1 até 100 vale :',soma1);

const quantidade2 = 1000;
let soma2 = 0;

for(let i = 1; i <= quantidade2; i++){
    soma2 = soma2 + i
    console.log(i, '+', soma2 - i, '=', soma2);
}
console.log('Fim, a soma de 1 até 1000 vale :',soma2);

const quantidade3 = 10000;
let soma3 = 0;

for(let i = 1; i <= quantidade3; i++){
    soma3 = soma3 + i
    console.log(i, '+', soma3 - i, '=', soma3);
}
console.log('Fim, a soma de 1 até 10.000 vale :',soma3);

const quantidade4 = 100000;
let soma4 = 0;

for(let i = 1; i <= quantidade4; i++){
    soma4 = soma4 + i
    console.log(i, '+', soma4 - i, '=', soma4);
}
console.log('Fim, a soma de 1 até 100.000 vale :',soma4);

const quantidade5 = 1000000;
let soma5 = 0;

for(let i = 1; i <= quantidade5; i++){
    soma5 = soma5 + i
    console.log(i, '+', soma5 - i, '=', soma5);
}
console.log('Fim, a soma de 1 até 1.000.000 vale :',soma5);
