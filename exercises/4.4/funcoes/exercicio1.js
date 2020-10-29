function palindromo(palavra) {
    let palavraInversa = palavra.split("").reverse().join(""); //Split transforma em array, reverse inverte ordem, join transforma em string novamente
    if (palavraInversa === palavra) {
        return true
    } else {
        return false
    }
}

console.log(palindromo('arara'))