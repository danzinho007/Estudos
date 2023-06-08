Algoritmo "Empréstimo"
// Linguagem e Lógica de Programação
// Curso em Vídeo 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 14/01/2023
Var
// Seção de Declarações das variáveis 
   Emprestimo, Parcelas, Juros, ValorParcelas, ValorTotal1, ValorTotal2: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("Quanto você irá pegar de EmpréstimO ?")
   Leia(Emprestimo)
   Escreval("Quantas parcelas você irá pagar ?")
   Escreval("Não fuja, nós iremos atrás de você")
   Leia(Parcelas)
   Escreval("Qual a porcentagem dos juros ao mês ?")
   Leia(Juros)
   ValorParcelas <- Emprestimo / Parcelas * Juros  / 100
   ValorTotal1 <- Emprestimo / Parcelas * Juros  / 100 * Parcelas + Emprestimo
   ValorTotal2 <- ValorParcelas * Parcelas + Emprestimo
   Escreval("O Valor das Parcelas será de", ValorParcelas)
   Escreval("O Valor Total com Juros será de", ValorTotal1)
   Escreval("o Valor Total com Juros será de", ValorTotal2)

Fimalgoritmo