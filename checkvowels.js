function checkvowels (str) {
    var str= str.toLowerCase()
    //console.log (str)
    var deret= ' aiueo'
    var vowel= true
   
    for (var i=0; i<str.length; i++) {
        if (deret.indexOf(str[i]) === -1) {
            vowel = false
        }  
     
    }  
    return vowel
}


console.log (checkvowels ('eOuIa AiOa'))
console.log (checkvowels ('kUda hITam'))
console.log (checkvowels ('acMilAn teAm'))