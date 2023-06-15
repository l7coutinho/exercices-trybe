//Remova a tag h2, filha do elemento where-are-you

const removeElementH2 = document.querySelector('#where-are-you');
const remove = removeElementH2.firstElementChild;

removeElementH2.removeChild(remove);
