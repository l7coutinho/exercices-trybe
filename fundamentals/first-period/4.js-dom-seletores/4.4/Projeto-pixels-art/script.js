let selectedColor;

const pixelBoard = document.querySelector('#pixel-board');

const board = () => {
  for (let index = 0; index < 25; index += 1) {
    const square = document.createElement('div');
    square.classList.add('pixel');
    square.id = `${index}`;

    pixelBoard.appendChild(square);
  }
};
board();

const palette = document.querySelectorAll('.color');

palette.forEach((element) => {
  element.addEventListener('click', (el) => {
    palette.forEach((elementClass) => {
      const classSelected = document.querySelector('.selected');
      if (classSelected !== el.target) {
        elementClass.classList.remove('selected');
      }
    });
    el.target.classList.toggle('selected');

    const selectedClassColor = document.querySelector('.selected');
    selectedColor = selectedClassColor.style.backgroundColor;
  });
});

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((element) => {
  element.addEventListener('click', () => {
    const colorElement = element.style.backgroundColor;
    if (colorElement !== selectedColor) {
      element.style.backgroundColor = selectedColor;
    }
  });
});

const createBtnClear = () => {
  const mainContainer = document.querySelector('.top div');
  const btnClear = document.createElement('button');
  btnClear.textContent = 'Limpar';
  btnClear.id = 'clear-board';
  btnClear.classList.add('btn-style');

  btnClear.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      const element = pixels[index];

      element.style.backgroundColor = null;
      localStorage.removeItem('pixelBoard');
    }
  });
  mainContainer.appendChild(btnClear);
};

createBtnClear();

const randomArr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const colorHex = () => {
  let string = '#';
  for (let index = 0; index < 6; index += 1) {
    const hex = Math.floor(Math.random() * randomArr.length);
    string += randomArr[hex];
  }
  return string;
};

colorHex();

const squareColor = () => {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    let randomColors = colorHex();
    color[index].style.backgroundColor = randomColors;
  }
};

squareColor();

const createBtnChangeHex = () => {
  const mainContainer = document.querySelector('.top div');
  const btnChangeHex = document.createElement('button');
  btnChangeHex.textContent = 'Cores aleatórias';
  btnChangeHex.id = 'button-random-color';
  btnChangeHex.classList.add('btn-style');

  btnChangeHex.addEventListener('click', () => {
    const color = document.querySelectorAll('#color-palette li');
    let coresSalvas;
    for (let index = 0; index < color.length; index += 1) {
      coresSalvas = colorHex();
      color[index].style.backgroundColor = coresSalvas;
    }
  });
  mainContainer.appendChild(btnChangeHex);
};

createBtnChangeHex();

const color = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];
const saveColor = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    const pixelColor = pixels[index];
    pixelColor.addEventListener('click', () => {
      if (color[pixelColor.id] === '') {
        color[pixelColor.id] = pixelColor.style.backgroundColor;
        localStorage.setItem('pixelBoard', JSON.stringify(color));
      }
    });
  }
};

saveColor();

const updateColor = () => {
  const paletteArt = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < pixels.length; index += 1) {
    if (paletteArt !== null) {
      pixels[index].style.backgroundColor = paletteArt[index];
    }
  }
};

updateColor();
