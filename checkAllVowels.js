// your code here

function checkVowel(string){
    let vocal = 'aiueo'

    for(let i = 0 ; i < vocal.length ; i++){
        for(let j = 0 ; j < string.length ; j++){

            if (string[j] === vocal[i]){
                return true
            } else {
                return false
            }
        }
    }
    // return false
}
console.log(checkVowel('brmmmm')) // false
console.log(checkVowel('aueioae')) //true
console.log(checkVowel('qwrtuipm')) //false
console.log(checkVowel('qrqtqyqtqyrytyhgnvm')) //false