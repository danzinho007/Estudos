Algoritmo "Par, Ímpar e Divisibilidade"
// Linguagem e Lógica de Programação
// Curso em Vídeo 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/01/2023

// Divisível por :
// 2 = Par = OK
// 3 = Soma dos algarismo for divisível por 3
// 4 = Dois últimos algarismos for divisível por 4
// 5 = Terminar em 0 ou 5
// 6 = Divisível por 2 e 3 = OK
// 7 = Se o 1° grupo de algarismos separados menos o
// dobro do último algarismo for múltiplo de 7, então
// o número original é divisível por 7
// 8 = Três últimos algarismos forem divisíveis por 8
// ou terminar em 000
// 9 = Se a soma dos algarismos do número for
// divisível por 9
// 10 = Terminar em 0
// 11 = Um número é divisível por 11 se a soma dos
// algarismos de ordem par menos a soma dos
// algarismos de ordem ímpar é um número divisível
// por 11.
// 12: Um número é divisível por 12 se o número
// formado pelos seus dois últimos algarismos é
// divisível por 4 e a soma dos seus algarismos é
// múltiplo de 3.
// 13: Um número é divisível por 13 se o quádruplo (4
// vezes) do último algarismo, somado com o número sem
// o último algarismo, resulta em um número divisível
// por 13. Se o número obtido ainda for grande,
// repete-se o processo até que se possa verificar a
// divisão por 13.
// 14: Um número é divisível por 14 se é par e também
// é divisível por 7 = OK
// 15: Um número é divisível por 15 se é divisível
// por 3 e também é divisível por 5 = OK
// 16: Um número é divisível por 16 se o número
// formado pelos seus quatro últimos algarismos é
// divisível por 16.
// 17 : Um número é divisível por 17 se o quíntuplo
// (5 vezes) do último algarismo, subtraído do número
// sem o último algarismo, produz um número divisível
// por 17. Se o número obtido ainda for grande,
// repete-se o processo até que se possa verificar a
// divisão por 17
// 18: Um número é divisível por 18 se é par e a soma
// dos seus algarismos é múltiplo de 9.
// 19: Um número é divisível por 19, se o dobro do
// último algarismo, somado ao número que não contém
// este último algarismo, produz um número divisível
// por 19. Se o número obtido ainda é grande,
// repetimos o processo até verificarmos a divisão
// por 19.
// 23 : Um número é divisível por 23, se o héptuplo
// (7 vezes) do último algarismo, somado ao número
// que não contém este último algarismo, produz um
// número divisível por 23. Se o número obtido ainda
// é grande, repetimos o processo até verificarmos a
// divisão por 23
// 29 : Um número é divisível por 29, se o triplo (3
// vezes) do último algarismo, subtraído do número
// que não contém este último algarismo, produz um
// número divisível por 29. Se o número obtido ainda
// for grande, repete-se o processo até verificarmos
// a divisão por 29.
// 31 : Um número é divisível por 31, se o triplo (3
// vezes) do último algarismo, somado ao número que
// não contém este último algarismo, proporciona um
// número divisível por 31. Se o número obtido ainda
// for grande, repete-se o processo até verificarmos
// a divisão por 31
// 49 : Um número é divisível por 49, se o quíntuplo
// (5 vezes) do último algarismo, somado ao número
// que não contém este último algarismo, proporciona
// um número divisível por 49. Se o número obtido
// ainda for grande, repete-se o processo até que se
// possa verificar a divisão por 49.


Var
// Seção de Declarações das variáveis 
   n1: Inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("Primo é quando é divisível por 1 e ele mesmo")
   Escreval("A verificação de primo só funciona pra números acima de 49")
   Escreval("Digite o número inteiro que você quer saber : ")
   Escreval("Ele precisa estrar entre 1 até 1.234.567.891")
   Leia(n1)
   Escreval(" ")
   Escreval("--- Verificando ---", n1)
   Escreval(" ")
   Se ( n1 % 2 = 0 ) entao
      Escreval("O número é par e também é divisível por 2")
   senao
      Escreval("O número é ímpar")
   FimSe
   Se ( n1 % 3 = 0 ) entao
      Escreval("O número é divisível por 3")
   FimSe
   Se ( n1 % 4 = 0 ) entao
      Escreval("O número é divisível por 4")
   FimSe
   Se ( n1 % 5 = 0 ) entao
      Escreval("O número é divisível por 5")
   FimSe
   Se ( n1 % 2 = 0 ) e ( n1 % 3 = 0 ) entao
      Escreval("O número é divisível por 6")
   FimSe
   Se ( n1 % 7 = 0 ) entao
      Escreval("O número é divisível por 7")
   FimSe
   Se ( n1 % 8 = 0 ) entao
      Escreval("O número é divisível por 8")
   FimSe
   Se ( n1 % 9 = 0 ) entao
      Escreval("O número é divisível por 9")
   FimSe
   Se ( n1 % 10 = 0 ) entao
      Escreval("O número é divisível por 10")
   FimSe
   Se ( n1 % 11 = 0 ) entao
      Escreval("O número é divisível por 11")
   FimSe
   Se ( n1 % 12 = 0 ) entao
      Escreval("O número é divisível por 12")
   FimSe
   Se ( n1 % 13 = 0 ) entao
      Escreval("O número é divisível por 13")
   FimSe
   Se ( n1 % 2  = 0 ) e ( n1 % 7 = 0 ) entao
      Escreval("O número é divisível por 14")
   FimSe
   Se ( n1 % 3 = 0 ) e ( n1 % 5 = 0 ) entao
      Escreval("O número é divisível por 15")
   FimSe
   Se ( n1 % 16 = 0 ) entao
      Escreval("O número é divisível por 16")
   FimSe
   Se ( n1 % 17 = 0 ) entao
      Escreval("O número é divisível por 17")
   FimSe
   Se ( n1 % 18 = 0 ) entao
      Escreval("O número é divisível por 18")
   FimSe
   Se ( n1 % 19 = 0 ) entao
      Escreval("O número é divisível por 19")
   FimSe
   Se ( n1 % 23 = 0 ) entao
      Escreval("O número é divisível por 23")
   FimSe
   Se ( n1 % 29 = 0 ) entao
      Escreval("O número é divisível por 29")
   FimSe
   Se ( n1 % 31 = 0 ) entao
      Escreval("O número é divisível por 31")
   FimSe
   Se ( n1 % 49 = 0 ) entao
      Escreval("O número é divisível por 49")
   FimSe
   Se ( n1 % 2 = 0 ) ou ( n1 % 3 = 0 ) ou ( n1 % 4 = 0 ) ou ( n1 % 5 = 0 ) ou ( n1 % 6 = 0 ) ou ( n1 % 7 = 0 ) ou ( n1 % 8 = 0 ) ou ( n1 % 9 = 0 ) ou ( n1 % 10 = 0 ) ou ( n1 % 11 = 0 ) ou ( n1 % 12 = 0 ) ou ( n1 % 13 = 0 ) ou ( n1 % 14 = 0 ) ou ( n1 % 15 = 0 ) ou ( n1 % 16 = 0 ) ou ( n1 % 17 = 0 ) ou ( n1 % 18 = 0 ) ou ( n1 % 19 = 0 ) ou ( n1 % 23 = 0 ) ou ( n1 % 31 = 0 ) ou ( n1 % 49 = 0 ) entao
      Escreval("O número não é primo")
   senao
      Escreval("O número é primo")
   FimSe
Fimalgoritmo