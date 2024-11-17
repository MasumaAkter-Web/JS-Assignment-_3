let arr=[2,4,6,1,3,5,7];
function filterPrime(arr){
    let primeNum=arr.filter(n=>{
        if(n<=2){
            return false;
        }
        for(let i=2;i<n;i++){
            if(n %i==0){
                return false;
            }
        }
        return true;
    })
    return primeNum;
}
console.log(filterPrime(arr));
