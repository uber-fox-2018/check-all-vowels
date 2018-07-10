function checkVowel(str){
    let arr = str.toLowerCase().split("");
    return arr.every(function(word){
        return "aiueo".includes(word);
    });
}
console.log(checkVowel("apple"));//false
console.log(checkVowel("aaaaaaa"));//true
console.log(checkVowel("haihahaa"));//false
console.log(checkVowel("AAoooOOOEEEee"));//true

