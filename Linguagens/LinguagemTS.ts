// Função para realizar o Bubble Sort em ordem crescente
function BubbleSort(lista: number[]): void {
    console.log("Exemplo BubbleSort Crescente:");

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                // Troca os elementos adjacentes
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;

                // Exibe o estado atual da lista
                console.log("Estado atual da lista:", lista.join(" "));
            }
        }
    }
}

// Função para realizar o Bubble Sort em ordem decrescente
function BubbleSortDesc(lista: number[]): void {
    console.log("Exemplo BubbleSort Decrescente:");

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - 1; j++) {
            if (lista[j] < lista[j + 1]) {
                // Troca os elementos adjacentes
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;

                // Exibe o estado atual da lista
                console.log("Estado atual da lista:", lista.join(" "));
            }
        }
    }
}

// Função principal
function Main(): void {
    let numbers: number[] = [150, 15, 0];

    // Exibe a lista original
    console.log("Lista original:", numbers.join(" "));

    // Ordena a lista usando o Bubble Sort crescente
    BubbleSort([...numbers]);  // Passando uma cópia para não alterar a lista original

    // Exibe a lista ordenada de forma decrescente
    BubbleSortDesc([...numbers]);  // Passando uma cópia para não alterar a lista original

    console.log("Fim");
}

// Chama a função principal
Main();
