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
