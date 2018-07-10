function checkVowel(words) {
  let vowel = 'aeiou';
  for(let i = 0; i < words.length; i++) {
    if(vowel.indexOf(words[i]) === -1) {
      return false;
    }
  }

  return true;

}

console.log(checkVowel('abate'));
console.log(checkVowel('aeieo'));