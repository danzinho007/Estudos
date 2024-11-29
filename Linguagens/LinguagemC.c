#include <stdio.h>

void bubble_sort(int lista[], int tamanho) {
    printf("Exemplo:\n");

    for (int i = 0; i < tamanho - 1; i++) {
        for (int j = 0; j < tamanho - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                // Exibe os elementos que serão trocados
                printf("Troca: %d ↔ %d\n", lista[j], lista[j + 1]);

                // Realiza a troca
                int temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;

                // Exibe o estado atual da lista
                printf("Estado atual da lista: ");
                for (int k = 0; k < tamanho; k++) {
                    printf("%d ", lista[k]);
                }
                printf("\n");
            }
        }
    }
}

int main() {
    int numbers[] = {150, 15, 0};
    int tamanho = sizeof(numbers) / sizeof(numbers[0]);

    printf("Lista original: ");
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // Ordena a lista usando Bubble Sort
    bubble_sort(numbers, tamanho);

    printf("Lista ordenada: ");
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    printf("Fim\n");
    return 0;
}
