const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const message = `Olá, ${
    fullOrder.order.delivery.deliveryPerson
  }, entrega para: ${order.name}, ${order.phoneNumber}, ${Object.values(
    order.address
  )}`;
  return message;
};

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  fullOrder.name = "Luiz Silva";
  fullOrder.payment.total = 50;

  const orderMessage = `Olá, ${
    fullOrder.name
  }, o valor total de seu pedido de ${Object.keys(fullOrder.order.pizza)} e ${
    fullOrder.order.drinks.coke.type
  } é de R$ ${fullOrder.payment.total.toFixed(2)}`;
  return orderMessage;
};

console.log(orderModifier(order));
