import java.util.Arrays;

public class Main {
    // Função para realizar o Bubble Sort
    public static void bubbleSort(int[] lista) {
        System.out.println("Exemplo:");

        // Laço externo controla as passagens
        for (int i = 0; i < lista.length; i++) {
            // Laço interno compara e troca elementos adjacentes
            for (int j = 0; j < lista.length - 1; j++) {
                if (lista[j] > lista[j + 1]) {
                    // Mostra os elementos que serão trocados
                    System.out.println("Troca: " + lista[j] + " ↔ " + lista[j + 1]);

                    // Troca os elementos adjacentes
                    int temp = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = temp;

                    // Exibe o estado atual da lista
                    System.out.println("Estado atual da lista: " + Arrays.toString(lista));
                }
            }
        }
    }

    // Função principal
    public static void main(String[] args) {
        // Lista de números a ser ordenada
        int[] numbers = {150, 15, 0};

        // Exibe a lista original
        System.out.println("Lista original: " + Arrays.toString(numbers));

        // Ordena a lista usando Bubble Sort
        bubbleSort(numbers);

        // Exibe a lista ordenada
        System.out.println("Lista ordenada: " + Arrays.toString(numbers));

        System.out.println("Fim");
    }
}
