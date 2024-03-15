/* 
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.

Exemplo de EntradaExemplo de Saída

entrada: 8



saída:

9
11
13
15
17
19
*/

const Quantidade = 6
function Impares(valor){
    let contar = 0
    let NovoValor = valor
    while(contar < Quantidade){
        if(NovoValor % 2 !== 0){
            console.log(NovoValor)
            contar++
        }
        NovoValor++
    }
}
Impares(8)
