const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas', (done) => {
  uppercase('joão', (str) => {
    expect(str).toBe('JOÃO');
    done();
  });
});