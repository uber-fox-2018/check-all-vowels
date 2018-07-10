function checkAllVowels(str) {
    let vocal = 'aiueo'
    let strWithoutSpace = []
    let strCount = 0

    for (let a = 0; a < str.length; a++) {
        if (str[a] != ' ') strWithoutSpace.push(str[a])
        for (let b = 0; b < vocal.length; b++) {
            if (str[a] == vocal[b]) strCount++
        }
    }
    return (strWithoutSpace.length == strCount ? true : false)
}

console.log(checkAllVowels('aaaaa'));
console.log(checkAllVowels('a aa aa'));
console.log(checkAllVowels('a!a'));
console.log(checkAllVowels('aaiiuu'))
