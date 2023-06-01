const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (index = 0; index < numbers.length; index++) {
  total += numbers[index];
  console.log(`${index} - ${numbers[index]}`);
}

console.log(`VALOR TOTAL: ${total}`);

//Some todos os valores contidos no array e imprima o resultado.
