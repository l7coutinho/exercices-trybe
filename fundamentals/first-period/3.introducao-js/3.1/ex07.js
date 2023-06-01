const totalPayment = 7000;
let inss;

if (totalPayment <= 1556.94) {
  inss = totalPayment * 0.08;
} else if (totalPayment > 1556.95 && totalPayment <= 2594.92) {
  inss = totalPayment * 0.09;
} else if (totalPayment > 2594.93 && totalPayment <= 5189.82) {
  inss = totalPayment * 0.11;
} else if (totalPayment > 5189.83) {
  inss = 570.88;
}

const payment = totalPayment - inss;
let ir;

if (payment < 1903.98) {
  console.log("Isento de Imposto de Renda");
}
if (payment >= 1903.99 && payment <= 2826.65) {
  ir = payment * 0.075 - 142.8;
} else if (payment >= 2826.66 && payment <= 3751.05) {
  ir = payment * 0.15 - 345.8;
} else if (payment >= 3751.06 && payment <= 4664.68) {
  ir = payment * 0.225 - 636.13;
} else if (payment > 4664.68) {
  ir = payment * 0.275 - 869.36;
}

const finalPayment = payment - ir;

console.log(`Valor de INSS: ${inss}`);
console.log(`Pagamento com INSS descontado ${payment}`);
console.log(`Valor do imposto de renda ${ir}`);
console.log(`Seu pagamento final é de ${finalPayment}`);
