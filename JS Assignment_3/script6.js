let s="hello everyone";
function capitalizeWords(s){
    return s
    .split(' ')
    .map(word=>
        word.charAt(0).toUpperCase()
    +word.slice(1).toLowerCase())
    .join(' ');

}
console.log(capitalizeWords(s));