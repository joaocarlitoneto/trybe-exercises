let tamanho = 9
let piramide = ""
let meio = Math.ceil(tamanho / 2)
let espacoEsquerdo = meio
let espacoDireito = meio

if (tamanho > 1) {
    for (let linha = 1; linha <= meio; linha += 1) {
        for (let coluna = 1; coluna <= tamanho; coluna += 1) {
            if (coluna == espacoDireito || coluna == espacoEsquerdo || linha == meio) {
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