// CONVERT ARRAY STRING TO ARRAY NUMBER
const arrStr = ["1", "3", "5", "9"];
const nuevo = arrStr.map((i) => Number(i));
console.log(nuevo);
// [1,3,5,9];


var inter = arrStr.map(function (i) {
                console.log(i);
                //console.log("Number(" + i + ") = " + Number(i));
                return Number(i);
            })

//https://www.codegrepper.com/code-examples/javascript/javascript+Convert+an+array+of+strings+to+numbers
