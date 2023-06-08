Algoritmo "Triângulos"
// Linguagem e Lógica de Programação
// Curso em Vídeo 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/01/2023
//Classificação quanto ao Ângulo :

//Acutângulo = 3 ângulos menores que 90°
//Obtusângulo = 1 ângulo maior que 90°
//Retângulo = 1 ângulo é igual a 90°
//Soma dos ângulo sempre 180°

//Classificação quanto ao Lado :

//Equilátero = 3 lados iguais
//Escaleno = 3 lados diferentes
//Isóscelos = 2 lados com a mesma medida

Var
// Seção de Declarações das variáveis 
   L1, L2, L3: Real
   A1, A2, A3: Real
   TRI, EQ, ES, IS: Logico
   AC, OB, RET: Logico
   
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("Verifique aqui se o seu Triângulo existe ou não")
   Escreval("Se for triângulo irei classificar ele também")
   Escreval(" ")
   Escreval("Obs¹ : Pra ser um triângulo a soma de qualquer lado deve ser ")
   Escreval("menor que o outro lado")
   Escreval("Obs² : A soma dos 3 ângulos deve ser igual a 180")
   Escreval(" ")
   Escreva("Digite o primeiro lado ")
	Leia(L1)
	Escreva("Digite o valor do ângulo ")
	Leia(A1)
	Escreva("Digite o segundo lado ")
	Leia(L2)
	Escreva("Digite o valor do ângulo ")
	Leia(A2)
	Escreva("Digite o terceiro lado ")
	Leia(L3)
	Escreva("Digite o valor do ângulo ")
	Leia(A3)
	TRI <- (L1 < L2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2) e (A1 + A2 + A3 = 180)
	EQ <- (L1 = L2) e (L2 = L3)
	ES <- (L1 <> L2) e (L2 <> L3) e (L1 <> L3)
   IS <- (L1 = L2) ou (L1 = L3) ou (L2 = L3)
   AC <- (A1<90) e (A2<90) e (A3<90)
   OB <- (A1>90) ou (A2>90) ou (A3>90)
   RET <- (A1=90) ou (A2=90) ou (A3=90)
  	Escreval("Pode formar um Triângulo ? ", TRI)
	Escreval("O triângulo é Equilátero ? ", EQ)
	Escreval("O triângulo é Escaleno ? ", ES)
	Escreval("O triângulo é Isósceles ? ", IS)
	Escreval("O triângulo é Acutângulo ? ", AC)
	Escreval("O triângulo é Obtusângulo ? ", OB)
	Escreval("O triângulo é Retângulo ? ", RET)
Fimalgoritmo