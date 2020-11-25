/* 
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
*/

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);

/*
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella,calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/

// const orderModifier = (order) => {
//   order.name = 'Luiz Silva';
//   order.order.pizza = {};
//   order.order.pizza['muzzarella'] = {amount: 1, price: 25};
//   order.order.pizza['calabresa'] = {amount: 1, price: 15};
//   order.payment.total = 50;
//   console.log(order);
//   console.log(order.order.pizza);
//   console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza}`);
// }

// orderModifier(order);

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);