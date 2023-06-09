//Crie a função verifyPalindrome, para verificar se a palavra é palindroma
function verifyPalindrome(word) {
  let split = [];
  for (let index = 0; index < word.length; index += 1) {
    split.push(word[index]);
  }

  let invert = [];
  for (let index1 = word.length - 1; index1 >= 0; index1 -= 1) {
    invert.push(word[index1]);
  }

  if (split.join("") !== invert.join("")) {
    return false;
  }
  return true;
}

console.log(verifyPalindrome("araasra"));
