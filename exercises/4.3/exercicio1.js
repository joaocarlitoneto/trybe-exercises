let tamanho = 4
let quadrado = ""

if (tamanho > 1) {
  for (let coluna = 0; coluna < tamanho; coluna += 1) {
    quadrado += "*"
  }

  for (let linha = 0; linha < tamanho; linha += 1) {
    console.log(quadrado)
  }

} else {
  console.log("O tamanho precisa ser maior que 0")
}