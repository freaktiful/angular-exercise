'use strict'

console.log("Hola mundo")

let x
x = 23
x = 'pepe'
x = true

console.log(x)

const y = 34
console.log(y)


/* los objetos en js son referencias, se pueden definir como const y lo que no puede cambiar es la
referencia, no el contenido. Es buena practica definirlas con const en vez de let*/
/* se declara como constante para evitar hacer cosas como obj=34 y te carges la referencia*/

const obj = {user: 'Pepe', edad: 33}
const amigos = ['Juan', 'Rosa']

obj.edad = 35
amigos.push('Raul')

///////////////////////////////////////////////////////////////////////

/* si javascript recibe parámetros de menos, los pone a undefined, y si recibe de más, pasa de ellos.
Tb se les puede dar valor por defecto por si no se pasa el parámetro */

function algo(a = 0,b = 0) {}

algo(8, 7, 9, 8)

/* las funciones se pueden declarar como el ejemplo de antes, o se pueden asignar, porque son
objetos (de tipo principal o de primera categoría). Cualquier cosa que se le pueda hacer a un
objeto se le puede hacer a una función. Se asignan igual que si se declaran, pero sin nombre */
/* lo mismo, declararla como const*/

const otra = function (a = 0, b = 0) {
    console.log(a+b)
}

/* se puede hacer que la función ADEMÁS almacene propiedades */
otra.propiedad = 'patata'

otra(2)
console.log(otra.propiedad)

/* funciones arrow (lambdas) */
const unaMas = () => {}

const lambdaCuadrado = (a) => {return a*a}
/* cuando el parámetro es único no hace falta poner paréntesis, y cuando la función está en 
una sola línea no hace falta indicar return (ni las llaves). O sea que se puede poner:*/
const cuadrado = a => a*a

console.log(cuadrado(7))
/* recibir una función como un parámetro es lo que se llama "callback". console.log no sabe 
qué hacer si le pasas una función como parámetro, pero setTimeout sí.*/
setTimeout(() => console.log(cuadrado(2)), 2000)
/* quiere que ejecute la función tras 2000 ms. */

const verCuadrado  = a => console.log(a*a)

/* si le pasas la función a saco te devuelve NaN porque intenta convertir undefined a number.
Y como le tienes que pasar una función (si le metes parámetros ya no es un callback, es el 
    resultado de la función), pues lo haces de forma anónima y así puedes meter parámetros
    porque le estás metiendo una funcion.*/
//setTimeout(verCuadrado, 4000) devuelve NaN
setTimeout(() => console.log(cuadrado(18)), 4000)


/* en javascript no hay código bloqueante, setTimeout se espera lo que le digas, PERO sigue 
ejecutando a lo suyo. Por eso va a ejecutar primero lo que viene ahora que lo del timeout*/

const data = [3, 6, 2, 9, 4, 6]
//const dataCuadrados = []

// ES6 -> esto funciona pero no es una función sino un bucle.
/*for (const item of data){
    dataCuadrados.push(item * item)
}*/

//forEach espera un callback. Es un método funcional que permite hacer bucles, y mejor usar esto.
//data.forEach( item => dataCuadrados.push(item*item))

/* para coger un array y sacar un array hay una función más específica que es map. Pero hay
que quitar la definición de antes y meterla aquí, porque si no da error porque es const*/
const dataCuadrados = data.map(item => item * item)

/* funciones parecidas a map*/
const dataPares = dataCuadrados.filter(item => !(item%2))

const sumaTotal = dataPares.reduce((a, b) => a + b)

console.log(data, dataCuadrados, dataPares, sumaTotal)

/* en javascript se pueden usar comillas simples o dobles para los strings, pero por convencion
se van a usar comillas simples, y las dobles se dejan para html*/

/* ES6 'template strings' usan "comillas francesas" que son las de la tecla a la derecha de la p.
El template string no hace falta meter los caracteres escapados, te lee todo lo que hay dentro.
Se pueden hacer interpolaciones estáticas también, con ${nombreVariable} */

let name = 'Pepe'
const cadena = `Template 
 string : ${name}`

 name = 'Maria'
 /* va a escribir Pepe porque es estático, no dinámico. Coge el valor del momento en el que 
 se hace la asignación*/

console.log(cadena)

/* Ambitos en ES6 */
let v1 = 34
console.log(v1)

/* pero si declaro v2 entre llaves, SOLO existe entre llaves, en ese bloque.
{
    let v2 = 36
}
console.log(v2) //esto daria error

El ámbito de let y const es el del bloque de código en el que se declaran*/

/* si se le da un valor por defecto al parámetro aDatos ayuda a que luego haya un cierto
tipado dentro porque ya se huele que va a ser un array (y se pueda usar length)*/
//const media = (aDatos = []) => {
//   return aDatos.reduce((a,b) => a + b) / aDatos.length
//}
/*si media espera un array y se le pasan un conjunto de valores, pues casca */
//media(2,4,6,7)

/* entonces hay un operador que se llama "rest operator" que son tres puntos, que coge lo que
le pases y lo convierte en un array. */
const media = (...aDatos) => {
   return aDatos.reduce((a,b) => a + b) / aDatos.length
}

console.log(media(2,4,6,7))

/* Clonado de objetos */
const obj1 = {user: 'Pepe', clave: 34}
const obj2 = obj1 //asignacion por referencia, no por valor.
obj2.clave = 0
console.log(obj1) // porque tenemos dos referencias al mismo objeto.

/* si se quiere hacer una asignación por valor:  */

const obj3 = { user: 'Ramiro', clave: 16}
const obj4 = Object.assign({}, obj3) // esto sería un método de clonado
obj4.user = 'Paloma'
obj4.clave = 0
console.log(obj3)
console.log(obj4)

/* pero se puede hacer de forma más sencilla: el operador ... convierte el objeto en sus 
propiedades sueldas, y vale para crear el otro objeto. */

const obj5 = {...obj3}
obj5.user = 'Jesusín'
obj5.clave = 11
console.log(obj3)
console.log(obj5)

/* esto también vale con arrays */
const numbers = [4, 5, 6, 7]
const clonNumbers = [...numbers]
clonNumbers.push(12)
console.log(numbers, clonNumbers)

/* creación de clones por desconstrucción y construcción del elemento. Pero este clonado no 
es profundo. Si dentro del objeto hay otro objeto, no lo clona.*/

const obj6 = {user: 'Francisca', clave: {id:23, dpto:1}}
const obj7 = {...obj6}
obj7.clave.id = 0;
console.log(obj6) /*el id de la clave se copia por referencia así que se modifica en los dos */

/* cómo se hace un deep clone? pues usando JSON. JSON solo tiene dos propiedades: 
stringify -> convierte lo que le pases a string, y parse -> el proceso inverso, pero es un clon, 
y sí que clona en profundidad. */

const obj8 = JSON.parse(JSON.stringify(obj6))
obj8.clave.id = 234
console.log(obj6, obj8)

/* esto tiene una desventaja. Los formatos de tipo date, al pasarlos a String y vuelta, desaparecen*/
let hoy = new Date()
console.log(hoy.toDateString())



