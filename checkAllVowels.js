// your code here
function checkAllVowels(str) {
    let vowel = 'aiueo';
    let countVowel = 0;

    for(let i=0; i<vowel.length; i++){
        for(let j=0; j<str.length; j++){
            if(str[j].toLowerCase() === vowel[i]){
                countVowel++
            }
        }
    }

    // return countVowel
    if(countVowel == str.length){
        return true
    }else{
        return false
    }

}

console.log(checkAllVowels('makAn'));
console.log(checkAllVowels('miNum'));
console.log(checkAllVowels('brRRrrrt'));
console.log(checkAllVowels('aaauOouooooII'));

