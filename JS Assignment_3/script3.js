let arr=[1,2,3];
function squareAndsum(arr){
    let sumOfsquare=0;
    let squaredOfSum=arr.map(num=>
      sumOfsquare =sumOfsquare+(num*num)
    
    )
    return sumOfsquare;
}
console.log(squareAndsum(arr));
    
