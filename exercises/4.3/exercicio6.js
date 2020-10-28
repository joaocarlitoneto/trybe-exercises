let numeroEscolhido = 6
let divisor

for (let numero = 2; numero < numeroEscolhido && divisor !== 1; numero += 1) {
    divisor = 0
    if (numeroEscolhido % numero == 0) {
        divisor += 1
    }
}

if (divisor === 0) {
    console.log(numeroEscolhido + " é PRIMO")
} else {
    console.log(numeroEscolhido + " não é PRIMO")
}