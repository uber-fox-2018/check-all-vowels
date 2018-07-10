// your code here
function checkAllVowels(str) {
    let toLowCase = str.toLowerCase()
    let vocals = 'aiueo'
    let containStr = ''
    for (let i = 0; i < toLowCase.length; i++) {
        for(let j = 0; j < vocals.length; j++) {
            if (toLowCase[i] === vocals[j]) {
                containStr += toLowCase[i]
            }
        }
    }
    if (containStr.length === toLowCase.length) {
        return true
    } else {
        return false
    }
}

console.log(checkAllVowels('AiAu'));
