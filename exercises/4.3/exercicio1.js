let tamanho = 4;
let quadrado = "";


if (tamanho > 1) {
  for (let column = 0; column < tamanho; column += 1) {
    quadrado += "*";
  }

  for (let row = 0; row < tamanho; row += 1) {
    console.log(quadrado)
  }
} else {
  console.log("O tamanho precisa ser maior que 0")
}