//Crie um irmão para elementoOndeVoceEsta
const elementPai = document.querySelector('#pai');
const elementoOndeVoceEsta2 = document.createElement('section');
elementPai.appendChild(elementoOndeVoceEsta2);

//Crie um filho para elementoOndeVoceEsta.

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const sonOndeVoceEsta = document.createElement('section');
ondeVoceEsta.appendChild(sonOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const sonPrimeiroFilhoDoFilho = document.createElement('div');
primeiroFilhoDoFilho.appendChild(sonPrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho =
  sonPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
