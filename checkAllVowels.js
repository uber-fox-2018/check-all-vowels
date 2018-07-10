// check all vowels 
// learning competencies 
// - mealakian problem solving di javascript

// realease
// release 0: check vowel
// buat sebuah funtion yang mengecek apakah suatu string terdiri dari huruf vokal semua atau tidak tanpa menggunakan regular expression(regex). return true bila ditemukan dan false bila tidak


function checkAllVowels(str){
    var vokal = 'aiueo'

    for(var i = 0 ; i < str.length ; i++){
        for(var j = 0 ; j < vokal.length ; j++){
            if(str[i] === vokal[j]){    
                return true
            }
        }
    }
    return false
}
console.log(checkAllVowels('aaafdfd')) // false

// jika semua str adalah vokal maka return true
