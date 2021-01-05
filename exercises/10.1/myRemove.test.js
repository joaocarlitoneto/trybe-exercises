const myRemove = require('./myRemove');

describe('myRemove', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1,2,3,4],4)).toEqual([1,2,3]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  });

  test('Faça uma chamada para a função myRemove e verifique se o array passado por parâmetro não sofreu alterações', () => {
    const arr = [1,2,3,4];
    myRemove(arr, 1);
    expect(arr).toEqual([1,2,3,4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
  });
})