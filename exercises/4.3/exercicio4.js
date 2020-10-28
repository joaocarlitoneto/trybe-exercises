let tamanho = 5
let piramide = ""
let meio = Math.ceil(tamanho / 2)
let espacoEsquerdo = meio
let espacoDireito = meio

if (tamanho > 1) {
    for (let linha = 0; linha <= meio; linha += 1) {
        for (let coluna = 1; coluna <= tamanho; coluna += 1) {
            if (coluna > espacoDireito && coluna < espacoEsquerdo) {
                piramide += "*"
            } else {
                piramide += " "
            }
        }
        console.log(piramide)
        piramide = ""
        espacoDireito -= 1
        espacoEsquerdo += 1
    }
} else {
    console.log("O tamanho precisa ser maior que 0")
}