const quantidade5 = 1000000;
let soma5 = 0;

for(let i = 1; i <= quantidade5; i++){
    soma5 = soma5 + i
    console.log(i, '+', soma5 - i, '=', soma5);
}
console.log('Fim, a soma de 1 até 1.000.000 vale :',soma5);
