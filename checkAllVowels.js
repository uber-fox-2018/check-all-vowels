function check(vowels) {
  let v = 'aiueo';
  let str = vowels.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < v.length; j++) {
      if (str[i] === v[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(check('Absjn'));
console.log(check('ghjywt'));
