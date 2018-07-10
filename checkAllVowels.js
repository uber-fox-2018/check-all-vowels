// your code here
function cekVowels(string) {
    var vowels = 'AIUEO'
    var count = 0
    for(var i = 0; i < string.length;i++){
        for(var j = 0; j < vowels.length;j++){
            if(string[i].toUpperCase() === vowels[j]){
                // return true
                count++
            }
        }
    }
    
    if(count === string.length){
        return true
    }
    return false
}

console.log(cekVowels('aku'));
console.log(cekVowels('bbbbb'));
console.log(cekVowels('AABVIDA'));
console.log(cekVowels('aaaaa'));
console.log(cekVowels('AAA'));


