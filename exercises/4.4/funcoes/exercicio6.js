function somaNumeros(numeros) {
    let soma = 0
    for (let i = 1; i <= numeros; i += 1) {
        soma += i
    }
    return "A soma de todos os números é de " + soma
}

console.log(somaNumeros(7))