let custo = 20, venda = 52

if (custo >= 0 && venda >= 0) {
  let custoTotal = custo * 1.2
  let lucro = (venda - custoTotal) * 1000
  console.log(lucro)
} else {
  console.log("Digite um valor maior que zero para cada item")
}