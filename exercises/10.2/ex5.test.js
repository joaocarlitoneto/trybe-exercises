beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1º - 1 beforeEach
// 2º - 1 test
// 3º - 1 afterEach
// 4º - 1 beforeEach
// 5º - 2 beforeEach
// 6º - 2 test
// 7º - 2 afterEach
// 8º - 1 afterEach