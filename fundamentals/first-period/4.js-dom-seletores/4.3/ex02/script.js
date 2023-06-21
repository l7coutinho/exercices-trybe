const createDaysOfTheWeek = () => {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Exercício 1 – Crie um calendário dinamicamente
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const holidayList = [24, 25, 31];
const fridayList = [4, 11, 18, 25];
let select;

const daysDecember = () => {
  const daysUnorderedList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = decemberDaysList[index];
    const numberList = document.createElement('li');
    numberList.className = 'day';
    numberList.innerHTML = days;

    if (holidayList.includes(days)) {
      numberList.classList.add('holiday');
    }
    if (fridayList.includes(days)) {
      numberList.classList.add('friday');
    }

    daysUnorderedList.appendChild(numberList);
  }
};

daysDecember();

//Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
const btnHoliday = document.querySelector('#btn-holiday');

const holidayButton = btnHoliday.addEventListener('click', () => {
  const classHoliday = document.querySelectorAll('.holiday');
  classHoliday.forEach((element) => {
    element.style.backgroundColor =
      element.style.backgroundColor === 'blue' ? 'rgb(238,238,238)' : 'blue';
  });
});

//Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras
const btnFriday = document.querySelector('#btn-friday');

const fridayButton = btnFriday.addEventListener('click', () => {
  const classFriday = document.querySelectorAll('.friday');

  for (let index = 0; index < classFriday.length; index += 1) {
    let fridayDays = classFriday[index];

    if (fridayDays.textContent === 'Sextou') {
      fridayDays.textContent = fridayList[index];
    } else {
      fridayDays.textContent = 'Sextou';
    }
  }
});

//Implemente duas funções que criem um efeito de "zoom"
const allDays = document.querySelectorAll('.day');

allDays.forEach((element) => {
  element.addEventListener('mouseenter', (el) => {
    el.target.style.fontSize = '30px';
  });
  element.addEventListener('mouseleave', (el) => {
    el.target.style.fontSize = '20px';
  });
});
