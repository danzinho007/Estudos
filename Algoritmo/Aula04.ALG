Algoritmo "semnome"
// Linguagem e Lógica de Programação
// Curso em Vídeo 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/01/2023
Var
// Seção de Declarações das variáveis 
   angulo, Seno, Coss, Tang, Sec, Cosec, Cotg: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

//Funções Aritméticas
//Valor Absoluto = Abs(-10) = 10
//Valor positivo
//Exponenciação = Exp(3,2) = 9
//3² = 9
//Valor Inteiro = Int(3.9) = 3
//Somente a parte inteira
//Raiz Quadrada = RaizQ(25) > 5
//Retorna Pi = Pi > 3.1415
//Seno (rad) = Sen(0.523) > 0.5
//Cosseno (rad) = Cos(0.523) > 0.86
//Tangente (rad) = Tag(0.523) > 0.57
//Graus para Rad = GraupRad(30) > 0.523

   Escreval("Saiba o Seno, Cosseno, Tangente, Secante, Cossecante e Cotangente")
   Escreva ("de qualquer ângulo")
   Escreval (" ")
   Escreva ("Informe o ângulo ")
   Leia(angulo)
   Seno  <- Sen(GraupRad(angulo))
   Coss  <- Cos(GraupRad(angulo))
   Tang  <- Tan(GraupRad(angulo))
   Sec   <- 1 / Coss
   Cosec <- 1 / Seno
   Cotg  <- 1 / Tang
   Escreval("O seno de ", angulo, " é igual a " , Seno)
   Escreval("O sosseno de ", angulo, " é igual a " , Coss)
   Escreval("A tangente de ", angulo, " é igual a " , Tang)
   Escreval("A secante de ", angulo, " é igual a " , Sec)
   Escreval("A cossecante de ", angulo, " é igual a " , Cosec)
   Escreval("A cotangente de ", angulo, " é igual a " , Cotg)
   
Fimalgoritmo