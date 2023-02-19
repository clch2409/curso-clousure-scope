var firsName; // undefined -- declarando
firsName = "Cesar"; // asignando
console.log(firsName);

var lastName = "Luis"; // declarando / asignando
lastName = "Cubarrubia"; // reasignando
console.log(lastName);

var fruit = 'Orange'; // declarando / asignando
var fruit = 'Pear'; // redeclarando
console.log(fruit);

//! let

let country = "Venezuela";//declarando / asignando
country = "Colombia"; // reasignando
console.log(country);

let continent = 'Europe'; //declarando / asignando
let continent = 'America'; //$ no es posible reasginar una variable que use la palabra reservada 'let'
//$ La cual forma parte del block scope

//! const
const animal = 'dog' //declarando / asignando
animal = 'cat'; // reasignando
console.log(animal);

const bugs =  [];
bugs.push("🦗");
console.log(bugs);

bugs.pop();
console.log(bugs);
//! se puede alterar esta variable, ya que solo se trabaja con su contenido o elementos pero no la variable como tal.
//! Por lo que no se puede reasignar.  