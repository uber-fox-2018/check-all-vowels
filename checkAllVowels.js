// your code here
function checkVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let isVowels = false;

    for (let i = 0; i < str.length; i++) {
        let vowelCount = 0;
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelCount++;
            }
        }
        if (vowelCount === 0) {
            return false;
        } else {
            isVowels = true;
        }
    }
    return isVowels;
}

console.log(checkVowels('aeiou')); //true
console.log(checkVowels('abior')); //false
console.log(checkVowels('OUIAE')); //true
console.log(checkVowels('abcde')); //false
console.log(checkVowels('OUOUAI')); //true