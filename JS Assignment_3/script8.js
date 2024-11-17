let arr=[1,3,4,6,-8];
function anyNegative(arr){
    let negtiveNum=arr.some(n=> n<0)
return negtiveNum;
}
console.log(anyNegative(arr));