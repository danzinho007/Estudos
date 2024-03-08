const quantidade = 10;

// Para o for () se passa 3 observações :
// 1 Variável onde irá armazenar os dados
// 2 Validação
// 3 O que vai acontecer
// i++ = i + 1
for(let i = 0; i < quantidade; i++) {
    console.log(i)
}
console.log('Fim')
// Explicando :
// 1- Vai criar uma variável i e armazenar o 0
// 2- Enquanto o i for menor que a quantidade que é 10, vai dar verdadeiro
// 3- Ele irá somar +1 
// Ou seja : i = 0 > i = 1 > i = 2, até chegar a 9, pois 10 é igual a 10, se fosse i <= quantidade, dai pararia no 10

for(let j = 0; j > quantidade; j++) {
    console.log(j)
}
console.log('Fim')
// Explicando :
// 1- Vai criar uma variável j e armazenar o 0
// 2- Enquanto o j for maior que a quantidade que é 10, vai dar verdadeiro
// 3- E irá somar +1
// Porém no caso acima vai dar Falso, pois o j não é maior que a quantidade ( 10 )
