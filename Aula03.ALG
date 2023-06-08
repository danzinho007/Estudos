Algoritmo "semnome"
// Linguagem e Lógica de Programação
// Curso em Vídeo 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/01/2023
Var
// Seção de Declarações das variáveis 
   N1, N2, Soma, SubA, SubB, Mult, DiInA, DiInB: Inteiro
   ModuA, ModuB: Inteiro
   DiviA, DiviB, ExpoA, ExpoB: Real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("Operadores Aritméticos")
   Escreval("Aqui você irá saber o resultado da soma, subtração, multiplicação")
   Escreval("divisão, divisão inteira, exponenciação e Módulo de 2 números")
   Escreva("Informe um número ")
   Leia(N1)
   Escreva("Informe outro número ")
   Leia(N2)
   //Operadores Aritméticos : 7
   //Sendo Ex A = 5 e B = 2
   //1-Adição + = A + B > 7
   //2-Subtração - = A - B : 3
   //3-Multiplicação * = A * B > 10
   //4-Divisão / = A / B > 2.5
   //5-Divisão Inteira \ = A \ B > 2
   //Quociente da Divisão 5 / 2
   //6-Exponenciação ^ = A ^ B > 25
   //7-Módulo % = A % B > 1
   //Resto da Divisão 5 / 2
   Soma <- N1+ N2
   SubA <- N1 - N2
   SubB <- N2 - N1
   Mult <- N1 * N2
   DiviA <- N1 / N2
   DiviB <- N2 / N1
   DiInA <- N1 \ N2
   DiInB <- N2 \ N1
   ExpoA <- N1 ^ N2
   ExpoB <- N2 ^ N1
   ModuA <- N1 % N2
   ModuB <- N2 % N1
   Escreval("A soma é " ,Soma)
   Escreval("A soma entre " , N1, " e " , N2, " é " , Soma)
   Escreval(" ")
   Escreval("A subtração entre " , N1, " e " ,N2, " é ", SubA)
   Escreval("A subtração entre " , N2, " e " ,N1, " é ", SubB)
   Escreval(" ")
   Escreval("A multiplicação entre " , N1, " e " ,N2, " é ", Mult )
   Escreval("A divisão entre " , N1, " e " ,N2, " é ", DiviA)
   Escreval("A divisão entre " , N2, " e " ,N1, " é ", DiviB)
   Escreval(" ")
   Escreval("A divisão inteira entre " , N1, " e " ,N2, " é ", DiInA)
   Escreval("A divisão inteira entre " , N2, " e " ,N1, " é ", DiInB)
   Escreval(" ")
   Escreval("A exponenciação  entre " , N1, " e " ,N2, " é ", ExpoA)
   Escreval("A exponenciação  entre " , N2, " e " ,N1, " é ", ExpoB)
   Escreval(" ")
   Escreval("O módulo entre " , N1, " e " ,N2, " é ", ModuA)
   Escreval("O módulo entre " , N2, " e " ,N1, " é ", ModuB)
Fimalgoritmo