const chess = "Bispo";

switch (chess) {
  case "Peão":
    console.log(
      "Peão apenas se move para frente se limitando a 2 casas no primeiro lance e 1 casa nas demais jogadas"
    );
    break;
  case "Cavalo":
    console.log("Cavalo apenas se move em L");
    break;
  case "Bispo":
    console.log("Bispo se move nas diagonais sem limite de distancia");
    break;
  case "Torre":
    console.log("Torre se move em linhas retas sem limite de distância");
    break;
  case "Rainha":
    console.log("Rainha se move para todos os lados sem limite de distância");
    break;
  case "Rei":
    console.log("Rei se move para todos os lados na distancia de 1 casa");
    break;
}
