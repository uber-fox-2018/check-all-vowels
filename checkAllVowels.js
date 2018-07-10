// your code here
function checkAllVowels(str) {
    let vocals = 'aiueo'
    let output = ''

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (str[i].toLowerCase() == vocals[j]) {
                output += str[i]
            }
        }
    }

    if (output.length == str.length) {
        return true
    } else {
        return false
    }
}

console.log(checkAllVowels('aaaoooeeuuuii'))
console.log(checkAllVowels('arrraubbuuii'))
console.log(checkAllVowels('DnsOp'))