<?php

// Função para realizar o Bubble Sort
function bubbleSort(&$lista) {
    echo "Exemplo:\n";

    // Laço externo controla as passagens
    for ($i = 0; $i < count($lista); $i++) {
        // Laço interno compara e troca elementos adjacentes
        for ($j = 0; $j < count($lista) - 1; $j++) {
            if ($lista[$j] > $lista[$j + 1]) {
                // Mostra os elementos que serão trocados
                echo "Troca: {$lista[$j]} ↔ {$lista[$j + 1]}\n";

                // Troca os elementos adjacentes
                $temp = $lista[$j];
                $lista[$j] = $lista[$j + 1];
                $lista[$j + 1] = $temp;

                // Exibe o estado atual da lista
                echo "Estado atual da lista: " . implode(" ", $lista) . "\n";
            }
        }
    }
}

// Função principal
function main() {
    // Lista de números a ser ordenada
    $numbers = [150, 15, 0];

    // Exibe a lista original
    echo "Lista original: " . implode(" ", $numbers) . "\n";

    // Ordena a lista usando Bubble Sort
    bubbleSort($numbers);

    // Exibe a lista ordenada
    echo "Lista ordenada: " . implode(" ", $numbers) . "\n";

    echo "Fim\n";
}

// Chama a função principal
main();

?>
