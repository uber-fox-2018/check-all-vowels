function checkVowel(str){
    var arr=[];
    for(var letter of str){
      if(letter!==" "){
        arr.push(letter.toLowerCase());
      }
    }
    return arr.every(function(word){
        return "aiueo".includes(word);
    });
}
console.log(checkVowel("apple"));//false
console.log(checkVowel("aaaaaaa"));//true
console.log(checkVowel("haihahaa"));//false
console.log(checkVowel("AAoooOOOEEEee"));//true
console.log(checkVowel("AAooo OOOE EEee"));//true

