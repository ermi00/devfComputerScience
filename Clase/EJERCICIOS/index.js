// Crear una clase de Tarjeta de Crédito: Crea una clase de tarjeta de crédito
// que tenga propiedades para el número de la tarjeta, la fecha de vencimiento 
// y el código de seguridad. La clase debe tener métodos para validar los datos 
// de la tarjeta y procesar pagos. Puedes crear objetos de esta clase para 
// implementar una pasarela de pago en tu sitio web.

class TarjetaDeCredito{
    constructor(numeroDeTarjeta, fechaDeVencimiento, codigoDeSeguridad){
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.fechaDeVencimiento = fechaDeVencimiento;
        this.codigoDeSeguridad = codigoDeSeguridad;
    }

    validarNumeroDeTarjeta(){
        if(this.numeroDeTarjeta.length >= 16){
            console.log(`Esta tarjeta cuenta con 16 digitos: ${this.numeroDeTarjeta}`);
        } else{
            console.log(`Esta tarjeta NO cuenta como valida`);
        }
    }
}

let tarjetaUsuario1 = new TarjetaDeCredito("1234567890123456", "07/26", 122);

tarjetaUsuario1.validarNumeroDeTarjeta();