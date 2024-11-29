fun bubbleSort(lista: IntArray) {
    println("Exemplo:")

    // Laço externo controla as passagens
    for (i in lista.indices) {
        // Laço interno compara e troca elementos adjacentes
        for (j in 0 until lista.size - 1) {
            if (lista[j] > lista[j + 1]) {
                // Mostra os elementos que serão trocados
                println("Troca: ${lista[j]} ↔ ${lista[j + 1]}")

                // Troca os elementos adjacentes
                val temp = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temp

                // Exibe o estado atual da lista
                println("Estado atual da lista: ${lista.joinToString(" ")}")
            }
        }
    }
}

fun main() {
    // Lista de números a ser ordenada
    val numbers = intArrayOf(150, 15, 0)

    // Exibe a lista original
    println("Lista original: ${numbers.joinToString(" ")}")

    // Ordena a lista usando Bubble Sort
    bubbleSort(numbers)

    // Exibe a lista ordenada
    println("Lista ordenada: ${numbers.joinToString(" ")}")

    println("Fim")
}
