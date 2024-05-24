// ^ Given a random number you have to return 
// ^ the digits of this number within an array in reverse order.

// * Example

// * 348597 => [7,9,5,8,4,3]


function digitize(num){

    return num.toString().split('').map((e) => Number(e)).reverse();

}
console.log(digitize(1234));
