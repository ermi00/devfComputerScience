// FUNCION FARENHEITTOCELSIUS

function farenheitToCelsius(a){
    return (a - 32) * 5/9;
}

console.log(farenheitToCelsius(19));

// FUNCION FLECHA FARENHEITTOCELSIUS

farenheitToCelsius = (a) => {
    return (a - 32) * 5/9;
}

// // FUNCION PALINDROME

// function palindrome(x){
//     if (x == x && x){
//         return true;
//     } else {
//         return false;
//     }
// }

// No lo termine xd


// CREANDO UN OBJETO

let Usuario = {
    nombre: "Juan",
    apellido: "Perez",
    pasatiempos: ["Futbol", "Correr", "Cantar", "Videojuegos"],
}

console.log(`El nombre es ${Juan.nombre}`);

// CREANDO UN OBJETO PARTE 2

let usuario1 = {
    nombre: "Pablo",
    apellido: "Morza",
    edad: 15,
    saludar: function(){
        console.log(`Hola! ${this.nombre} ${this.apellido}`);
    }
}


let usuario2 = {
    nombre: "Saul",
    apellido: "Hernandez",
    edad: 16
}

let usuario3 = {
    nombre: "Donovan",
    apellido: "Carrasca",
    edad: 17
}
