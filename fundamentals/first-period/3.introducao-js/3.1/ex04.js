let angleA = 40;
let angleB = 120;
let angleC = 20;

let angles = angleA + angleB + angleC;

let verifyAngles = angleA > 0 && angleB > 0 && angleC > 0;

if (verifyAngles) {
  if (angles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Valor inválido");
}
