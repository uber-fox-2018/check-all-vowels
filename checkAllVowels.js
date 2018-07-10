function checkVowels(str){
    let notVowels = 'bcdfghjklmnpqrstvwxyz'
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < notVowels.length; j++){
            if (str[i]===notVowels[j]){
                return false
            }
        }
    }
    return true
}

console.log(checkVowels('aeo'))
