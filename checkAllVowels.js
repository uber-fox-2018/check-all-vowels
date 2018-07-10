// your code here
function checkVowels(words){
    let vowel = "aiueoAIUEO"
    let counter = 0;
    for(let i = 0; i<vowel.length; i++){
        for(let j = 0; j<words.length; j++){
            if(vowel[i] === words[j]){
                counter++
            }
        }
    }
    if(counter === words.length){
        return true
    }else{
        return false
    }
}