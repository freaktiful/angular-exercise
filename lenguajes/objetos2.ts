import { ɵmakeDecorator } from "@angular/core";

// no hay interfaces en ecmascript, esto es typescript puro
// en un interfaz los atributos son siempre public
interface Animal {
    especie: string
}

class Perro implements Animal {
    constructor(
        public especie: string

    ){}
    ladrar () {
        console.log('guau')
    }
}

let perro: Perro;
let gato: Perro;

perro = new Perro('Perro')
//gato = {especie: 'Perro'} // esto es correcto porque mientras se cumpla la estructura, todo bien.
/* pero al añadir la función ladrar ya si peta porque gato no tiene la misma estructura, claro, le
falta la función */

console.log(perro, gato)

let canario: Animal; // siempre es una definición estructural, nunca semántica o terminológica.


// DECORADORES -> añadirle metadatos a una clase mediante una función que se aplica de forma externa
/* como se van a ver a lo largo del curso no dice nada más sobre esto*/

