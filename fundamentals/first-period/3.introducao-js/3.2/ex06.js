const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impares += 1;
  }
}

if (impares === 0) {
  console.log("Nenhum valor impar encontrado");
} else {
  console.log(`Foram encontrados ${impares} números impares!!`);
}

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
