// your code here
function checkVowel(string) {
    let vowels = ['a','i','u','e','o']
    let checker = 0;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j] ) {
                checker++;
            }
        }

        if (checker === 0) {
           return false 
        }

    }
    return true;
}

console.log(checkVowel('test'));
console.log(checkVowel('kemana'));
console.log(checkVowel('aaaaaaaiiiiiuuuu'));

