const checkAllVowel = (input) => {
  const vowels = ['a', 'i', 'u', 'e', 'o']
  let allString = ''
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] != ' ') {
      allString += input[i]
    }
  }
  let allStringLowerCase = allString.toLowerCase()
  for (let i = 0; i < allStringLowerCase.length; i++) {
    let isVowel = false
    for (let j = 0; j < vowels.length; j++) {
      if (allStringLowerCase[i] === vowels[j]) {
        isVowel = true
      }
    }
    if (!isVowel) {
      return false
    }
  }
  return true
}

console.log(checkAllVowel('aaaiiuu')); //true
console.log(checkAllVowel('aaaiiuu hbcaja')); //false
console.log(checkAllVowel('ari supriatna')); //false
console.log(checkAllVowel('aa ooo eee uu  ')); //true
console.log(checkAllVowel('AAA uu IIUu')); // true
