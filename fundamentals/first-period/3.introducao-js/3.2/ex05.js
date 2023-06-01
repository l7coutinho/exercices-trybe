const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const maiorNumero = () => {
  let largerNumber = numbers[0];

  for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > largerNumber) {
      largerNumber = numbers[index];
    }
  }
  console.log(largerNumber);
};

maiorNumero();

//Utilizando for, descubra o maior valor contido no array e imprima-o.
