function fruits(){
    if (true){
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi"; // block scope (let tiene este alcance)
        const fruit3 = "Banana"; // block scope (const tiene este alcance)
    }

    console.log(fruit1);
    console.log(fruit2); //* No se puede acceder a esta variable
    console.log(fruit3); //* Tampoco a esta
}

fruits();