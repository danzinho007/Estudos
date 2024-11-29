using System;
using System.Linq;

class Program
{
    // Função para realizar o Bubble Sort
    static void BubbleSort(int[] lista)
    {
        Console.WriteLine("Exemplo:");

        // Laço externo controla as passagens
        for (int i = 0; i < lista.Length; i++)
        {
            // Laço interno compara e troca elementos adjacentes
            for (int j = 0; j < lista.Length - 1; j++)
            {
                if (lista[j] > lista[j + 1])
                {
                    // Mostra os elementos que serão trocados
                    Console.WriteLine($"Troca: {lista[j]} ↔ {lista[j + 1]}");

                    // Troca os elementos adjacentes
                    int temp = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = temp;

                    // Exibe o estado atual da lista
                    Console.WriteLine("Estado atual da lista: " + string.Join(" ", lista));
                }
            }
        }
    }

    // Função principal
    static void Main()
    {
        // Lista de números a ser ordenada
        int[] numbers = { 150, 15, 0 };

        // Exibe a lista original
        Console.WriteLine("Lista original: " + string.Join(" ", numbers));

        // Ordena a lista usando Bubble Sort
        BubbleSort(numbers);

        // Exibe a lista ordenada
        Console.WriteLine("Lista ordenada: " + string.Join(" ", numbers));

        Console.WriteLine("Fim");
    }
}
