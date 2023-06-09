const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

const lessonsArr = school.lessons;

// Crie uma função que obtenha o valor da chave de acordo com sua posição no array.

const valueKey = () => {
  for (let index = 0; index < lessonsArr.length; index += 1) {
    console.log(Object.values(lessonsArr[index]));
  }
};

valueKey();

//Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const totalStudents = () => {
  let plus = 0;
  for (let index = 0; index < lessonsArr.length; index += 1) {
    plus += lessonsArr[index].students;
  }
  return plus;
};

console.log(totalStudents());

//Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons.
//o retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verifyKeys = (obj, nameKey) => {
  for (let index = 0; index < obj.length; index += 1) {
    if (obj[index][nameKey] === undefined) {
      return false;
    }
  }
  return true;
};

console.log(verifyKeys(lessonsArr, "professor"));
