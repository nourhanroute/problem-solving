//^  Write a function called repeatString which repeats the given
//^  String src exactly count times.

//* Example
//*  repeatStr(6, "I") // "IIIIII"
//* repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatString(num,str){

    // let newStr = "";

    // for( let i = 0; i < num; i++){

    //     newStr += str;
    // }
    // return newStr;

     return str.repeat(num);
}
console.log(repeatString(4," no"));
