#include <iostream>
#include <vector>
using namespace std;

void bubble_sort(vector<int>& lista) {
    cout << "Exemplo:" << endl;

    // Laço externo controla as passagens
    for (size_t i = 0; i < lista.size(); i++) {
        // Laço interno compara e troca elementos adjacentes
        for (size_t j = 0; j < lista.size() - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                // Mostra os elementos que serão trocados
                cout << "Troca: " << lista[j] << " ↔ " << lista[j + 1] << endl;

                // Troca os elementos adjacentes
                swap(lista[j], lista[j + 1]);

                // Exibe o estado atual da lista
                cout << "Estado atual da lista: ";
                for (size_t k = 0; k < lista.size(); k++) {
                    cout << lista[k] << " ";
                }
                cout << endl;
            }
        }
    }
}

int main() {
    // Lista de números a ser ordenada
    vector<int> numbers = {150, 15, 0};

    // Exibe a lista original
    cout << "Lista original: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    // Ordena a lista usando Bubble Sort
    bubble_sort(numbers);

    // Exibe a lista ordenada
    cout << "Lista ordenada: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    cout << "Fim" << endl;
    return 0;
}
