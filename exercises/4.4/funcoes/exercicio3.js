function menorValor(numeros) {
    let menor = 0
    for (let indice in numeros) {
        if (numeros[menor] > numeros[indice]) {
            menor = indice
        }
    }
    return "O menor valor está no índice " + menor + " e é o número " + numeros[menor]
}

console.log(menorValor([1, 2, 5, -3, 4, -10, 11, 22, -15, 4, 6]))