let arr=[1,2,3,4,5];
arr.forEach(sumArray);
function sumArray(){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;

}
console.log(sumArray());