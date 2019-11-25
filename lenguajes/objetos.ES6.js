'use strict'

/* se pueden definir las 'clases' como si fuera java, pero a ver, que no, que siguen sin ser clases */

class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}


const p1 = new Persona('Pepe', 25)
const p2 = new Persona('Elena', 32)

p1.saludar()
p2.saludar()

delete p2.edad
p2.color = 'amarillo'

p2.saludar()
console.log(p1, p2)

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(` y estudio ${this.curso}º`)
    }
}

const a1 = new Alumno('Teresa', 15, 3)
a1.saludar()
