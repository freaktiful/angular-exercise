'use strict'

/* notación literales o JSON*/
const obj = {user: 'Jacinta', edad: 73}
// obj = new Object(...)

const datos = [4, 6, 8]
// datos = new Array(...)

// hay otros casos en los que no hay notación literal posible, necesitan un new sí o sí
const hoy = new Date()
const error = new Error()

// se pueden hacer expresiones regulares tb pero no las vamos a usar
const exp = /1/
// exp = new RegExp()

// tipos no instanciables: JSON y Math

/* la alternativa a la notación literal son las Funciones Constructoras (que por convenio van con la
    primera letra mayúscula)*/

function Persona(nombre, edad) {
    this.user = nombre
    this.edad = edad
    //dentro de los constructores no funcionan las funciones anónimas
  /*  this.saludar = function () {
        console.log(`Hola, soy ${this.user}`)
    }*/
}

/* definiendo la función en el constructor, se duplica cada vez que hay una creación nueva.
La solución es "llevarse la función al prototipo de la función constructora"*/
Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.user}`)
}

/* de esta forma la función no se duplica cada vez que se haga un new nuevo, sino que está en 
el prototipo */

const p1 = new Persona('Elena', 23)
const p2 = new Persona('Lucia', 13)
const p3 = new Persona('Rebeca', 43)

console.log(p1, p2, p3)
console.log(obj)
p1.saludar()

/* como no son clases, se pueden borrar y añadir propiedades de los objetos */
delete p3.edad
p3.color = 'morado'

console.log(p3)





