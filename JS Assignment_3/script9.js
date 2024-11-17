let s="butter";
function countVowels(s){
   return s.split('').reduce((count,letter)=>
    {
        if(letter=='a'|| letter=='A'||
            letter=='e'|| letter=='E'||
             letter=='i'|| letter=='I'|| 
             letter=='o'|| letter=='O'||
              letter=='u'|| letter=='U'){
         return count+1;
        }
      else{
        return count;
      }
    },0)
}
console.log(countVowels(s));