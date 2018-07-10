function checkVowels(str) {
    var vowels = 'aiueo '

    if (str.length === 0) {
        return true
    } else {
        var trigger = 0
        for (var i = 0; i < vowels.length; i++) {
            if (str[0].toLowerCase() === vowels[i]) {
                trigger++
            }
        }
        if(trigger === 0) {
            return false
        }
        return checkVowels(str.slice(1))
    }
}

console.log(checkVowels("ai ueo"))