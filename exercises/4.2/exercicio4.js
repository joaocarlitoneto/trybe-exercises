let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let results = 0;

for (pos in numbers) {
  results += numbers[pos]
}
let average = results / numbers.length

if (average > 20) {
  console.log(`O resultado da média de todos os elementos é maior que 20`)
} else {
  console.log(`O resultado da média de todos os elementos é menor ou igual a 20`)
}
