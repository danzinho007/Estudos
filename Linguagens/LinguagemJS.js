// Função para realizar o Bubble Sort
function bubbleSort(lista) {
    console.log("Exemplo:");

    // Laço externo controla as passagens
    for (let i = 0; i < lista.length; i++) {
        // Laço interno compara e troca elementos adjacentes
        for (let j = 0; j < lista.length - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                // Mostra os elementos que serão trocados
                console.log(`Troca: ${lista[j]} ↔ ${lista[j + 1]}`);

                // Troca os elementos adjacentes
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;

                // Exibe o estado atual da lista
                console.log("Estado atual da lista:", lista.join(' '));
            }
        }
    }
}

// Função principal
function main() {
    // Lista de números a ser ordenada
    let numbers = [150, 15, 0];

    // Exibe a lista original
    console.log("Lista original:", numbers.join(' '));

    // Ordena a lista usando Bubble Sort
    bubbleSort(numbers);

    // Exibe a lista ordenada
    console.log("Lista ordenada:", numbers.join(' '));

    console.log("Fim");
}

// Chama a função principal
main();
