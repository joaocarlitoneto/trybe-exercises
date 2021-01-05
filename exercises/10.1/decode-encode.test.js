const { encode, decode } = require('./decode-encode');

describe('encode-decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('arara')).toEqual('1r1r1');
    expect(encode('element')).toEqual('2l2m2nt');
    expect(encode('mimimi')).toEqual('m3m3m3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('urubu')).toEqual('5r5b5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1r1r1')).toEqual('arara');
    expect(decode('2l2m2nt')).toEqual('element');
    expect(decode('m3m3m3')).toEqual('mimimi');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('5r5b5')).toEqual('urubu');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('dfgh')).toBe('dfgh');
    expect(decode('67890')).toBe('67890');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('urubu')).toHaveLength(5);
    expect(decode('1234567890')).toHaveLength(10);
  });
});