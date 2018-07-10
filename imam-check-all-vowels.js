function checkVowel(words) {
  let vowel = 'aeiou';
  for(let i = 0; i < vowel.length; i++) {
    for(let j = 0; j < words.length; j++) {
      if(vowel[i].toLowerCase() === words[j].toLowerCase() || vowel[i].toUpperCase() === words[j].toUpperCase()) {
        return true;
      }
    }
  }

  return false;

}

console.log(checkVowel('bbY'));
console.log(checkVowel('aeieo'));