// ^ You get an array of numbers, return the sum of all of the positives ones.

// * Example [1,-4,7,12] => 1 + 7 + 12 = 20

// & note: if there is nothing to sum, the sum is default to 0  


function sumOfPositive(arr){

    return arr.filter(function(ele){
         
        return ele > 0 

    })

    .reduce(function(acc,current){
        return acc + current + 0;
    })

    // let intiValue = 0;

    // for( let i = 0; i < arr.length; i++ ){
    //     if(arr[i]> 0){

    //         intiValue += arr[i];
    //     }
    // }
    // return intiValue;

}
console.log(sumOfPositive([1,-4,7,12]));




