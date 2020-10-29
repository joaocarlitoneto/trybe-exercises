function verificaFinalPalavra(palavra, finalPalavra) {
    let palavraInvertida = palavra.split("").reverse().join("")
    let finalPalavraInvertida = finalPalavra.split("").reverse().join("")

    for (let i = 0; i < finalPalavraInvertida.length; i += 1) {
        if (palavraInvertida[i] != finalPalavraInvertida[i]) {
            return false
        } else {
            return true
        }
    }
}

console.log(verificaFinalPalavra("trybe", "be"))