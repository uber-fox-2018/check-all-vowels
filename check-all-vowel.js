/* 
Aambigu ketika membaca soal, jadi dibuat dua,
untuk yang pertama ketika didalam suatu sentence atau kalimat
salah satunya terdapat huruf vokal maka akan di return TRUE

dan untuk yang kedua, semua huruf harus vokal untuk menghasilkan nilai TRUE
*/

function checkVowel(str){

  let lowerStr = str.toLowerCase().split(' ').join('')
  let vowel = 'aiueo'

  var buffer = []
  for(let i = 0; i < lowerStr.length; i++){
    for(let j = 0; j < vowel.length; j++) {
      if(lowerStr[i] === vowel[j] ){
        return true
      }
    }
  } 

  return false

}

console.log(checkVowel('Harles Bayu Anggara'))
console.log(checkVowel('AIEOAiea'))
console.log(checkVowel('KkLMnPJs'))



/*
function checkVowel(str){

    let lowerStr = str.toLowerCase().split(' ').join('')
    let vowel = 'aiueo'

    var buffer = []
    for(let i = 0; i < lowerStr.length; i++){
      for(let j = 0; j < vowel.length; j++) {
        if(lowerStr[i] === vowel[j] ){
          buffer.push(lowerStr[i])
        }
      }
    } 
    
    if(lowerStr.length === buffer.length){
      return true
    } else {
      return false
    }

}

console.log(checkVowel('Harles Bayu Anggara'))
console.log(checkVowel('AIEOAiea'))
*/