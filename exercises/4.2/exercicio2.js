let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let results = 0;

for (pos in numbers) {
  results += numbers[pos]
}
console.log(`O resultado da soma de todos os elementos é ${results}`)