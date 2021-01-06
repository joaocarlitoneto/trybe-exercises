const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }


  describe('verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado', () => {
    describe('Se existe', () => {
      it('retornar o nome do usuário', () => {
        expect.assertions(1);
        return getUserName(4).then(data => expect(data).toEqual('Mark'));
      });
    });
    
    describe('se não existe', () => {
      it('retornar um erro ', () => {
        expect.assertions(1);
        return getUserName(2).catch(error => expect(error).toEqual({error: 'User with 2 not found.'}));
      });
    });
  });