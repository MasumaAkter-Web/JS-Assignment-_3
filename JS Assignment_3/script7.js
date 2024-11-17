let arr=[2,1,6,9,3];
function findMax(arr){
    let maxVal=arr.reduce((n,max)=>
    {
        if(arr.length==0){
        throw new Error("Array is blank");
    }
            if(n>max){
    return n;
}
       return max;
})
return maxVal
        
}
console.log(findMax(arr));