function maiorNome(nome) {
    let nomeMaior = nome[0]
    for (let indice in nome) {
        if (nomeMaior.length < nome[indice].length) {
            nomeMaior = nome[indice]
        }
    }
    return "O maior nome da lista é de " + nomeMaior + " com " + nomeMaior.length + " letras"
}
console.log(maiorNome(['João', 'Fernanda', 'Carlos', 'Luiza', 'Ana', 'Alessandra']))