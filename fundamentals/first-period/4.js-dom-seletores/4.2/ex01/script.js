const color = document.querySelector('body');
color.style.backgroundColor = 'black';

//Acesse o elemento where-are-you

const whereAreYou = document.getElementById('where-are-you');

//Acesse parent a partir de where-are-you e adicione uma color a ele

const parent = whereAreYou.parentElement;
parent.style.backgroundColor = 'red';

//Acesse o first-child-of-child e adicione um texto a ele.

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'Adicionando um texto ao primeiro elemento filho';

//Acesse o first-child a partir de parent.

const firstChild = parent.firstElementChild;
