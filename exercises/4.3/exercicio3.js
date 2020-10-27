let tamanho = 10

if (tamanho > 1) {
    for (let linha = 1; linha < tamanho; linha += 1) {
        let trianguloInvertido = ""
        for (let coluna = 1; coluna <= tamanho; coluna += 1) {
            if (coluna <= tamanho - linha) {
                trianguloInvertido += " "
            } else {
                trianguloInvertido += "*"
            }
        }
        console.log(trianguloInvertido)
    }
} else {
    console.log("O tamanho precisa ser maior que 0")
}