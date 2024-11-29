# Demonstração :

# Exemplo : 150 e 15
# 1 : 150 é maior que 15 ? Sim, fica assim : 15, 150

# Exemplo : 150, 15, 0
# 1 : 150 é menor que 15 ? Não ele vai pro meio > 15, 150, 0
#     150 é menor que 0  ? Não, ele vai pra direita > 15, 0, 150
# 2 : 15 é menor que 0 ? Não, ele vai pra direita > 0, 15, 150

print("Exemplo : ")
def bubble_sort(lista): 
    for i in range(len(lista)): 
        for j in range(len(lista) - 1): 
            if lista[j] > lista[j + 1]: 
                # Troca os elementos adjacentes, se necessário
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
                print(f"Troca: {lista[j]} ↔ {lista[j + 1]}")  
                # Mostra a troca
                print(f"Estado atual da lista: {lista}")
                # Exibe o estado atual da lista após a troca
    return lista
    # Retornando a lista no final

numbers = [150, 15, 0, -50]
print("Lista ordenada: ", bubble_sort(numbers))
print("Fim")
