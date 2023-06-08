Algoritmo "Equação do 2° Grau"
// Linguagem e Lógica de Programação 
// Curso em Vídeo 
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
Var
   a, b, c: Inteiro
   delta: Real
   x1, x2: Real
Inicio
   Escreval ("Equacao do Segundo Grau")
	Escreval ("-----------------------")
	Escreva ("Informe o valor de A: ")
	Leia (a)
	Escreva ("Informe o valor de B: ")
	Leia (b)
	Escreva ("Informe o valor de C: ")
	leia (c)
	Escreval ("-----------------------")
	Escreval ("Sua equacao e: ", a, "x2 +" , b, "x +" , c , " = 0")
	delta <- (b*b) - 4*a*c
	Escreval ("Valor de Delta: ", delta: 4:2)
	Escreval ("-----------------------")
	
   Se (delta < 0) entao
	   Escreval ("Para Delta Negativo, nao existem raizes reais")
   FimSe
   
   Se (delta = 0) entao
	   x1 <- (-b + raizQ(delta)) / (2*a)
	   Escreval ("Para Delta zero, temos duas raizes reais iguais a", x1)
   FimSe
   
   Se (delta > 0) entao
      x1 <- (-b + raizQ(delta)) / (2*a)
      x2 <- (-b - raizQ(delta)) / (2*a)
      Escreval ("Para Delta Positivo, raizes diferentes: ")
      Escreval ("x' = ", x1: 4:1)
      Escreval ("x'' = ", x2: 4:1)
   FimSe
Fimalgoritmo