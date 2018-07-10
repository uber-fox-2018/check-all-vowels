const checkVowel = (string) => {
    let allVowels = true;
    for (let i in string){
        console.log(string[i].toUpperCase())
        if (string[i].toUpperCase() !== 'A' && 
        string[i].toUpperCase() !== 'I' && 
        string[i].toUpperCase() !== 'U' &&
        string[i].toUpperCase() !== 'E' &&
        string[i].toUpperCase() !== 'O'){
            allVowels = false;
        }

    }
    if (!allVowels){
        return false;
    }
    return true;
}



console.log(checkVowel('saya'));
console.log(checkVowel('aIuEO'));

