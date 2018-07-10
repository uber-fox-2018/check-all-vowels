// your code here
function checkVowel(string) {
    let vowels = ['a','i','u','e','o']
    let newString = ''

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j] ) {
               newString += vowels[j]
            }
        }
    }
    
    if (newString.length === string.length) {
        return true 
     }else {
        return false
     }
}

console.log(checkVowel('test'));
console.log(checkVowel('kemana'));
console.log(checkVowel('aaaaaaaiiiiiuuuu'));

