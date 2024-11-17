let arr=[2,3.5,true,"name",5,false,8];
function sumMixedArray(arr){
    let sum=0;
    for(let value of arr){
        if(typeof value=='number'){
           sum=sum+value
        }
    }
    return sum;

}
console.log(sumMixedArray(arr));