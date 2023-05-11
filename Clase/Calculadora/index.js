// Crear una clase de Calculadora: Crea una clase de calculadora que tenga 
// métodos para sumar, restar, multiplicar y dividir dos números. Puedes 
// crear objetos de esta clase para realizar cálculos.

class Calculadora{
    constructor(valor1, valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    sumar(){
        return `La suma de ${this.valor1} y ${this.valor2} es igual a ${this.valor1 + this.valor2}`
    }

    restar(){
        return `La resta de ${this.valor1} y ${this.valor2} es igual a ${this.valor1 - this.valor2}`
    }

    multiplicacion(){
        return `La multiplicacion de ${this.valor1} y ${this.valor2} es igual a ${this.valor1 * this.valor2}`
    }

    division(){
        return `La division de ${this.valor1} entre ${this.valor2} es igual a ${this.valor1/this.valor2}`
    }
}

let operacionSumaUsuario1 = new Calculadora(20,13);


console.log(operacionSumaUsuario1.sumar());
console.log(operacionSumaUsuario1.restar());
console.log(operacionSumaUsuario1.multiplicacion());
console.log(operacionSumaUsuario1.division());