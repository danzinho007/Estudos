/*
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.

Entrada
O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média durante a mesma (em km/h).

Saída
Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

Exemplo de EntradaExemplo de Saída

entrada1: 10
entrada2: 85
saída: 70.833

entrada1: 2
entrada2: 92
saída: 15.333

entrada1: 22
entrada2: 67
saída: 122.833
*/

// João : automóvel 12 km/l
// Tempo gasto em horas
// Velocidade média em km/h

const CONSUMO = 12
function Combustivel(Tempo, VelMed){
    const distancia = VelMed * Tempo
    const consumoFinal = distancia / CONSUMO
    return consumoFinal.toFixed(3)
}

console.log(Combustivel(10,85))
// Velocidade Média é a Distância sobre o Tempo
// VM = D / T 
// Ou seja : Distância é Velocidade Média * Tempo
