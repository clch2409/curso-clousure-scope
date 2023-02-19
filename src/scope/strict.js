'use strict'; //! Se usa para evitar la asignación de una variable sin antes ser declarada
pi = 3.1416;
console.log(pi);

function myFunction(){
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());