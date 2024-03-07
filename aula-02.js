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
