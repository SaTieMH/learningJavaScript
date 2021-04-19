//ARROW FUNCTION
for (let i = 0, p = Promise.resolve(); i < 10; i++) {
    p = p.then(_ => new Promise(resolve =>
        setTimeout(function () {
            console.log(i);
            resolve();
        }, Math.random() * 1000)
    ));
}

//REGULAR FUNCTION
for (let i = 0, p = Promise.resolve(); i < 10; i++) {
   p = p.then(function(_) {
     return new Promise(function (resolve) {
       return setTimeout (function () {
           console.log(i);
           resolve();
         }, Math.random() * 1000)
     });
   });
}  

//https://stackoverflow.com/questions/57321325/how-to-change-arrow-function-to-regular-function
//https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop/40338726#40338726?newreg=8324995125284942b43fe5ee48691927
