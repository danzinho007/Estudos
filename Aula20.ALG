Algoritmo "Equação do 2° Grau"
// Linguagem e Lógica de Programação
// Curso em Vídeo
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
Var
   a1, b1, c1: Inteiro
   a2, b2, c2: Inteiro
   a3, b3, c3: Inteiro
   delta1: Real
   delta2: Real
   delta3: Real
   x1, x2: Real
   x3, x4: Real
   x5, x6: Real
Inicio
   Escreval ("Equacao do Segundo Grau")
	Escreval ("-----------------------")
	Escreva ("Informe o valor de A: ")
	Leia (a1)
	Escreva ("Informe o valor de B: ")
	Leia (b1)
	Escreva ("Informe o valor de C: ")
	leia (c1)
	Escreval ("-----------------------")
	Escreval ("Sua equacao e: ", a1, "x2 +" , b1, "x +" , c1 , " = 0")
	delta1 <- (b1*b1) - 4*a1*c1
	Escreval ("Valor de Delta: ", delta1: 4:2)
	Escreval ("-----------------------")

   Se (delta1 < 0) entao
	   Escreval ("Para Delta Negativo, nao existem raizes reais")
   senao
        Se (delta1 = 0) entao
	     x1 <- (-b1 + raizQ(delta1)) / (2*a1)
	        Escreval ("Para Delta zero, temos duas raizes reais iguais a", x1)
        senao
             Se (delta1 > 0) entao
             x1 <- (-b1 + raizQ(delta1)) / (2*a1)
             x2 <- (-b1 - raizQ(delta1)) / (2*a1)
             Escreval ("Para Delta Positivo, raizes diferentes: ")
             Escreval ("x' = ", x1: 4:1)
             Escreval ("x'' = ", x2: 4:1)
             FimSe
        FimSe
   FimSe
   
//Como temos 3 condições :
//Se ... então ... senão para delta <0
//Se ... então ... senão para delta = 0
//Se ... então para delta > 0
//Logo teremos 3 FimSe

   Escreval(" ")
   Escreval ("Equacao do Segundo Grau")
	Escreval ("-----------------------")
	Escreva ("Informe o valor de A: ")
	Leia (a2)
	Escreva ("Informe o valor de B: ")
	Leia (b2)
	Escreva ("Informe o valor de C: ")
	leia (c2)
	Escreval ("-----------------------")
	Escreval ("Sua equacao e: ", a2, "x2 +" , b2, "x +" , c2 , " = 0")
	delta2 <- (b2*b2) - 4*a2*c2
	Escreval ("Valor de Delta: ", delta2: 4:2)
	Escreval ("-----------------------")

   Se (delta2 < 0) entao
	   Escreval ("Para Delta Negativo, nao existem raizes reais")
   senao
        Se (delta2 = 0) entao
	     x3 <- (-b2 + raizQ(delta2)) / (2*a2)
	        Escreval ("Para Delta zero, temos duas raizes reais iguais a", x1)
        senao
             Se (delta2 > 0) entao
             x3 <- (-b2 + raizQ(delta2)) / (2*a2)
             x4 <- (-b2 - raizQ(delta2)) / (2*a2)
             Escreval ("Para Delta Positivo, raizes diferentes: ")
             Escreval ("x' = ", x3: 4:1)
             Escreval ("x'' = ", x4: 4:1)
             FimSe
        FimSe
   FimSe
   
//Como temos 3 condições :
//Se ... então ... senão para delta <0
//Se ... então ... senão para delta = 0
//Se ... então para delta > 0
//Logo teremos 3 FimSe

   Escreval(" ")
   Escreval ("Equacao do Segundo Grau")
	Escreval ("-----------------------")
	Escreva ("Informe o valor de A: ")
	Leia (a3)
	Escreva ("Informe o valor de B: ")
	Leia (b3)
	Escreva ("Informe o valor de C: ")
	leia (c3)
	Escreval ("-----------------------")
	Escreval ("Sua equacao e: ", a3, "x2 +" , b3, "x +" , c3 , " = 0")
	delta3 <- (b3*b3) - 4*a3*c3
	Escreval ("Valor de Delta: ", delta3: 4:2)
	Escreval ("-----------------------")

   Se (delta3 < 0) entao
	   Escreval ("Para Delta Negativo, nao existem raizes reais")
   senao
        Se (delta3 = 0) entao
	     x1 <- (-b3 + raizQ(delta3)) / (2*a3)
	        Escreval ("Para Delta zero, temos duas raizes reais iguais a", x1)
        senao
             Se (delta3 > 0) entao
             x5 <- (-b3 + raizQ(delta3)) / (2*a3)
             x6 <- (-b3 - raizQ(delta3)) / (2*a3)
             Escreval ("Para Delta Positivo, raizes diferentes: ")
             Escreval ("x' = ", x5: 4:1)
             Escreval ("x'' = ", x6: 4:1)
             FimSe
        FimSe
   FimSe
   
//Como temos 3 condições :
//Se ... então ... senão para delta <0
//Se ... então ... senão para delta = 0
//Se ... então para delta > 0
//Logo teremos 3 FimSe

Fimalgoritmo