let tamanho = 8
let triangulo = ""

if (tamanho > 1) {
    for (let coluna = 0; coluna < tamanho; coluna += 1) {
        triangulo += "*"
        console.log(triangulo)
    }
} else {
    console.log("O tamanho precisa ser maior que 0")
}