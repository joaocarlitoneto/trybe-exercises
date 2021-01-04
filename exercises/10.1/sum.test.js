const sum = require('./sum');

describe('Exercício 1 ao 5 SUM', () => {
  test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(sum(1,3)).toBe(4);
  });

  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  test('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => sum(4,'5')).toThrow();
  });
})
