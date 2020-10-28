function maiorValor(numeros) {
    let maior = 0
    for (let indice in numeros) {
        if (numeros[maior] < numeros[indice]) {
            maior = indice
        }
    }
    return "O maior valor está no índice " + maior + " e é o número " + numeros[maior]
}

console.log(maiorValor([1, 2, 5, 3, 4, 10, 11, 22, 5, 4, 6]))