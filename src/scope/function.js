function greeting(){
    let userName = 'Ana';
    console.log(userName)

    if (userName === 'Ana'){
        console.log(`Hello ${userName}!`)//! A la comilla invertida se le conoce como "Template String", para no tener que concatenar
    } //* Y las llaves como "Handle bars"
}

greeting()
console.log(userName); //! No se puede acceder, porque está declarada dentro de la función