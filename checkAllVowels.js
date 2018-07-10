// your code here
function checkAllVowels(str) {
    let vowels = ['a', 'i', 'u', 'e', 'o'];

    if(str.length === 0) return false;

    for(let i = 0; i < str.length; i++)
        if(str[i] === ' ') continue
        else if(!vowels.includes(str[i])) return false;
    return true;
}

console.log('abcde', checkAllVowels('abcde'));
console.log('oeuia', checkAllVowels('oeuia'));
console.log('', checkAllVowels(''));
console.log('i oe u', checkAllVowels('i oe u'));
