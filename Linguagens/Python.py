print("")
print("Por em ordem do menor para o maior os números : ")
print("64, -34, 25, -12, 0, 150")

print("")
numbers = [64, -34, 25, -12, 0, 150]
print("Lista original: ", numbers)

# Bubble Sort é um algoritmo de ordenação simples
def bubble_sort(lista): 
# Recebendo uma lista como parâmetro
    for i in range(len(lista)): 
    # Pega o tamanho da lista
        for j in range(len(lista) - 1): 
        # Pega o tamanho da lista e diminui em 1
            if lista[j] > lista[ j + 1 ]: 
            # Se j for maior que maior que j + 1 vai retornar a lista, caso constrário vai pra baixo 
                lista[j], lista[ j + 1 ] = lista[ j + 1 ], lista[j] 
                # Trocando os elementos da lista
    return lista
    # Retornando a lista no final

print("Lista ordenada: ", bubble_sort(numbers))

def bubble_sort1(lista1): 
# Recebendo uma lista como parâmetro
    for w in range(len(lista1)): 
    # Pega o tamanho da lista
        for x in range(len(lista1) - 1): 
        # Pega o tamanho da lista e diminui em 1
            if lista1[x] < lista1[ x + 1 ]: 
            # Se j for maior que maior que j + 1 vai retornar a lista, caso constrário vai pra baixo 
                lista1[x], lista1[ x + 1 ] = lista1[ x + 1 ], lista1[x] 
                # Trocando os elementos da lista
    return lista1
    # Retornando a lista no final

print("Lista desordenada : ", bubble_sort1(numbers))
print("")
