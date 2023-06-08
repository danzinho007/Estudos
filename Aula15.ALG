Algoritmo "Maioridade"
// Linguagem e Lógica de Programação
// Curso em Vídeo 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/01/2023
Var
// Seção de Declarações das variáveis 
   AnoAtual1, AnoNasci1, Idade1: Inteiro
   AnoAtual2, AnoNasci2, Idade2: Inteiro
   AnoAtual3, AnoNasci3, Idade3: Inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("------------------------------------------")
   Escreval("---------------Maioridade-----------------")
   Escreval("------------------------------------------")
   Escreva("Em que ano nós estamos ( yyyy ) : ")
   Leia(AnoAtual1)
   Escreva("Em que ano você nasceu ( yyyy ) : ")
   Leia(AnoNasci1)
   Escreval(" ")
   Escreval("------------------------------------------")
   Escreval("--------------Verificação-----------------")
   Escreval("------------------------------------------")
   Idade1 <-  AnoAtual1 - AnoNasci1
   Escreval("Você tem", Idade1, " anos")
   Se ( AnoAtual1 - AnoNasci1 >= 18 )entao
      Escreval("Logo é de maior e está apto a tirar carteira")
   senao
        Se ( 1 + AnoAtual1 - AnoNasci1 >= 18 ) entao
           Escreval("Esse ano após seu aniversário você será de maior e estará apto")
           Escreval("a tirar carteira")
        senao
      Escreval("Não será esse ano que você irá ser de maior")
        FimSe
   FimSe
   
   Escreval(" ")
   Escreval("Teste 2")
   Escreva("Em que ano nós estamos ( yyyy ) : ")
   Leia(AnoAtual2)
   Escreva("Em que ano você nasceu ( yyyy ) : ")
   Leia(AnoNasci2)
   Escreval(" ")
   Escreval("------------------------------------------")
   Escreval("--------------Verificação-----------------")
   Escreval("------------------------------------------")
   Idade2 <-  AnoAtual2 - AnoNasci2
   Escreval("Você tem", Idade2, " anos")
   Se ( AnoAtual2 - AnoNasci2 >= 18 )entao
      Escreval("Logo é de maior e está apto a tirar carteira")
   senao
        Se ( 1 + AnoAtual2 - AnoNasci2 >= 18 ) entao
           Escreval("Esse ano após seu aniversário você será de maior e estará apto")
           Escreval("a tirar carteira")
        senao
      Escreval("Não será esse ano que você irá ser de maior")
        FimSe
   FimSe

   Escreval(" ")
   Escreval("Teste 3")
   Escreva("Em que ano nós estamos ( yyyy ) : ")
   Leia(AnoAtual3)
   Escreva("Em que ano você nasceu ( yyyy ) : ")
   Leia(AnoNasci3)
   Escreval(" ")
   Escreval("------------------------------------------")
   Escreval("--------------Verificação-----------------")
   Escreval("------------------------------------------")
   Idade3 <-  AnoAtual3 - AnoNasci3
   Escreval("Você tem", Idade3, " anos")
   Se ( AnoAtual3 - AnoNasci3 >= 18 )entao
      Escreval("Logo é de maior e está apto a tirar carteira")
   senao
        Se ( 1 + AnoAtual3 - AnoNasci3 >= 18 ) entao
           Escreval("Esse ano após seu aniversário você será de maior e estará apto")
           Escreval("a tirar carteira")
        senao
      Escreval("Não será esse ano que você irá ser de maior")
        FimSe
   FimSe
Fimalgoritmo