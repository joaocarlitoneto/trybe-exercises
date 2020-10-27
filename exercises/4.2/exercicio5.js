let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highNumber = 0;

for (pos in numbers) {
  if (numbers[pos] > highNumber) {
    highNumber = numbers[pos]
  }
}

console.log(`O maior elemento do array é ${highNumber}`)