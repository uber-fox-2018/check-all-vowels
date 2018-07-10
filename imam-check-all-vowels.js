function checkVowel(words) {
  words = words.toLowerCase();
  const vowel = 'aeiou';
  for(let i = 0; i < vowel.length; i++) {
    for(let j = 0; j < words.length; j++) {
      if(vowel[i] === words[j].toLowerCase()) {
        return true;
      }
    }
  }

  return false;

}

console.log(checkVowel('bbYA'));
console.log(checkVowel('aeieo'));