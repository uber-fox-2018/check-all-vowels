// your code here

function checkAllVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    // hilangkan tanda spasi
    var kata = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            kata = kata + '';
        } else {
            kata = kata + str[i];
        }
    }

    // ubah kata tanpa spasi ke huruf kecil
    var low = kata.toLowerCase();
    var hasil = [];
    for(let i = 0; i < low.length; i++) {
        if(vowels.includes(low[i])) {
            hasil.push(1);
        }
    }

    // jika length hasil sama dengan leng kata dengan huruf kecil (low) artinya benar
    if(hasil.length === low.length) return true
    return false
}

console.log(checkAllVowels('a Aa'));
console.log(checkAllVowels('Asrul'));
