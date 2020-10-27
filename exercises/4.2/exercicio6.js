// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [2, 4, 6]
let isOdd = 0;
let isEven = 0

for (pos in numbers) {
  if (numbers[pos] % 2 === 1) {
    isOdd += 1
  }
}

console.log(`Tem ${isOdd} números ímpares no array`)

for (pos in numbers) {
  if (numbers[pos] % 2 === 0) {
    isEven += 1
  }
}

console.log(`Tem ${isEven} números pares no array`)