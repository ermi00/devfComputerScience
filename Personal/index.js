// // // FUNCION FARENHEITTOCELSIUS

// // function farenheitToCelsius(a){
// //     return (a - 32) * 5/9;
// // }

// // console.log(farenheitToCelsius(19));

// // // FUNCION FLECHA FARENHEITTOCELSIUS

// // farenheitToCelsius = (a) => {
// //     return (a - 32) * 5/9;
// // }

// // // // FUNCION PALINDROME

// // // function palindrome(x){
// // //     if (x == x && x){
// // //         return true;
// // //     } else {
// // //         return false;
// // //     }
// // // }

// // // No lo termine xd


// // // CREANDO UN OBJETO

// // let Usuario = {
// //     nombre: "Juan",
// //     apellido: "Perez",
// //     pasatiempos: ["Futbol", "Correr", "Cantar", "Videojuegos"],
// // }

// // console.log(`El nombre es ${Juan.nombre}`);

// // // CREANDO UN OBJETO PARTE 2

// // let usuario1 = {
// //     nombre: "Pablo",
// //     apellido: "Morza",
// //     edad: 15,
// //     saludar: function(){
// //         console.log(`Hola! ${this.nombre} ${this.apellido}`);
// //     }
// // }


// // let usuario2 = {
// //     nombre: "Saul",
// //     apellido: "Hernandez",
// //     edad: 16
// // }

// // let usuario3 = {
// //     nombre: "Donovan",
// //     apellido: "Carrasca",
// //     edad: 17
// // }



// class Animal{
//     constructor(nombre,tipo,sonido){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sonido = sonido;
//         this.pulgas = pulgas;
//     }

//     hablar(){
//         return `Este animal hace ${this.sonido}`
//     }
// }


// let perro = new Animal("Firulais", 11, "guau", true);

// EJERCICIO DEL PROFESOR

class Calculadora{
    constructor(valor1, valor2){
        this.valor1 = valor1
        this.valor2 = valor2
    }

    suma(){
        return `El resultado es de la suma es ${this.valor1 + this.valor2}`
    }

    resta(){
        return `El resultado es de la resta es ${this.valor1 - this.valor2}`
    }

    multiplicacion(){
        return `El resultado es de la multiplicacion es ${this.valor1 * this.valor2}`
    }

    division(){
        return `El resultado es de la division es ${this.valor1 / this.valor2}`
    }
}


let resultados = new Calculadora(17,8);
resultados.suma();
resultados.resta();
resultados.multiplicacion();
resultados.division();