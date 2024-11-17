let s="Hello Everyone";
function reverseWords(s){
    
    return s
    .split(' ')
    .map(word=> word.split('').reverse().join(''))
    .join(' ')

}
console.log(reverseWords(s));
