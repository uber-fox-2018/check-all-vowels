function cekAll (param){
  var konsonan = 'bcdfghjklmnpqrstvwxyz'
  var kondisi = 0
  for (var i=0 ; i < param.length ; i++){
    for (var j=0 ; j < konsonan.length ; j++){
      if (param[i] == konsonan[j]){
        kondisi +=1
      }
    }
  }
  if (kondisi == 0){
    return true
  }
  else {
    return false
  }
}

console.log(cekAll('aaaiiiuuueee'))
console.log(cekAll('aaaiivuuueee'))
console.log(cekAll('aaaiduuueee'))
