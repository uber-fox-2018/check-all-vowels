function checkAllVowels(word){
	var vocal = ['a','i','u','e','o']
	var newWord = word.toLowerCase()
	for (var i = 0 ; i < vocal.length ; i++){
		for (var j = 0 ; j < word.length ; j++){
			if (vocal[i] === newWord[j]){
				return true
			}
		}
	}
	return false
}

console.log(checkAllVowels('H4CKT1V8'))	// false
console.log(checkAllVowels('H4CKTIV8'))	// true
console.log(checkAllVowels('HACKTIV8')) // true
console.log(checkAllVowels('H4CKT1V D3L4P4N'))	// false