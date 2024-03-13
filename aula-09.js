const idades = [18, 14, 53, 'x']

console.log('O primeiro elemento do array é',idades[0])
console.log('O segundo elemento do array é',idades[1])
console.log('O terceiro elemento do array é',idades[2])
console.log('O terceiro elemento do array é',idades[3])
console.log('O número de elementos do array é',idades.length)

for(let i = 0; i < idades.length; i++){
    console.log('A posição',i,'do array é igual a', idades[i]);
}

// Explicação :
// i começa com 0, enquanto i for menor que a quantidade de elementos do array de idades, ele será somado 1
// Vai exibir o valor de i e depois o valor do array ocupado naquela posição
// Logo começara com 0 e 18 e vai até 2 53
// Quando i for igual a 3, ele não irá somar mais
