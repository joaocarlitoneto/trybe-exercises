function numeroRepetido(numeros) {
    let contadorNumero = 0
    let contadorNumeroRepetido = 0
    let indiceNumeroRepetido = 0

    for (let indice in numeros) {
        let comparaNumero = numeros[indice]
        for (let indice2 in numeros) {
            if (comparaNumero === numeros[indice2]) {
                contadorNumeroRepetido += 1;
            }
        }
        if (contadorNumero > contadorNumeroRepetido) {
            contadorNumeroRepetido = contadorNumero
            indiceNumeroRepetido = indice
        }
        contadorNumero = 0
    }
    return "O número que mais se repetiu na lista é o " + numeros[indiceNumeroRepetido] + " aparecendo " + contadorNumeroRepetido + " vezes."
}
console.log(numeroRepetido([2, 3, 2, 5, 8, 2, 3, 5, 3, 4, 5, 8, 2, 2]))