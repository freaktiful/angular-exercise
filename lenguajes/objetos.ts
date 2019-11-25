class Persona {
    public nombre: string
    public edad: number
    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar(): void {
        console.log(`Hola soy ${this.nombre}`)
    }
}

const p1 = new Persona('Pepe', 25)
const p2 = new Persona('Elena', 32)

p1.saludar()
p2.saludar()

delete p2.edad
//p2.color = 'amarillo' no deja añadir y solo deja quitar si son public

/* siguen sin ser clases aunque se le parezcan */

p2.saludar()
console.log(p1, p2)

// herencia

class Alumno extends Persona {
    public curso: number
    constructor(nombre: string, edad: number, curso: number) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(` y estudio ${this.curso}º`)
    }
}

const a1 = new Alumno('Teresa', 15, 2)
a1.saludar()

/* cuando tenemos una clase en typescript y hay un constructor en el que se declara un
nombre y un tipo, no hace falta poner la asignación ni la declaración de atributos*/

class PersonaType {
    constructor(
        public nombre: string,
        public edad: number
    ) {}
}

/* en typescript se pueden exportar e importar también como en ecmascript */


