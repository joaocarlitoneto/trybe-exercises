let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallNumber = 1000;

for (pos in numbers) {
  if (numbers[pos] < smallNumber) {
    smallNumber = numbers[pos]
  }
}

console.log(`O menor elemento do array é ${smallNumber}`)