// your code here

function checkVowel(string){
    let vocal = 'aiueo'

    for(let i = 0 ; i < vocal.length ; i++){
        for(let j = 0 ; j < string.length ; j++){

            if (string[j] === vocal[i]){
                return true
            }
        }
    }
    return false
}
console.log(checkVowel('brmmmm'))
console.log(checkVowel('aueioae'))
console.log(checkVowel('qwrtuipm'))
console.log(checkVowel('qrqtqyqtqyrytyhgnvm'))