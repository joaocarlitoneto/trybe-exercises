const factorial = number => {
  let result = 1

  for (let pos = 2; pos <= number; pos += 1) {
      result *= pos
  }

  return result
}

console.log(factorial(3))


/* Forma recursiva de fazer essa função */ 
const factorial = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorial(5))