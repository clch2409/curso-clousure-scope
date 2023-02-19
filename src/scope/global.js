//* variables

var a; //* declarando
var b = "b"; //declaramos / asignamos
b = "bb"; //* reasignacion
var a = "a"; // redeclaración

//Global Scope
var fruit = 'Apple'; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function contruies(){
    country = "Colombia"; //! No se declara, solo se asgina
    console.log(country); //! Por lo que se puede tomar como 
                          //! una variable global, a pesar de estar dentro de una función
}

contruies();
console.log(country);