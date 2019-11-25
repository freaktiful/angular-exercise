
// ASINCRONIA Y CALLBACKS

/* la forma de generar asincronía en javascript es con setTimeout*/

/* javascript es un lenguaje monohebra, el setTimeout no detiene la ejecución. Entonces tiene un 
bucle de eventos donde se encolan los procesos asíncronos. Estos se esperan al primer momento libre
a partir del momento en el que se les ha programado. Esto quiere decir que no tienen por qué
ejecutarse a los 2 segundos, sino en el primer hueco tras esos dos segundos */

function algoAsin() {
    setTimeout( () => {
        console.log('Ya')
    }, 2000)
}

console.log('1')
setTimeout(() => {
    console.log('2')
}, 0) /* esto aunque tenga 0 de retraso se va a la cola de eventos, y se ejecuta cuando haya hueco
en el procesador */
/* cuando acaba la ejecución síncrona es cuando se consulta la cola de eventos*/
console.log('3')
setTimeout(() => {
    console.log('4')
}, 2000) /* y este no, este cuando acaba la ejecución aún se espera proque tiene segundos que esperar */
console.log('5')
console.log('6')
console.log('7')
console.log('8')
console.log('9')

/* esto es equivalente a que no se puede igualar una variable a un proceso asíncrono */
let x = setTimeout( () => { 
            console.log('patata')
            return 1
        }, 0)
/* esta x se queda a puntero a Timeout porque para cuando se hace la asignación ya la ejecución 
se ha ido a Parla */        
/* para recoger estas cosas hay que pasarle el control al proceso asíncrono y eso se puede hacer
con un callback pasandoselo por parámetro para que lo haga cuando se ejecute la función. */

function algoAsinc(callback) {
    setTimeout( () => {
       let x = 23
       callback(x)
    }, 2000)
}
algoAsinc((x) => console.log(x)) /* y pinta x cuando se ejecuta */

////////////////////////////////////

/* pero si quieres concatenar la consecuencia en vez de anidarla se pueden usar promesas. Las promesas
son objetos que se resuelven a futuro, y se pueden cumplir en sentido positivo o negativo. */

function algoAsincPromise() {
    return new Promise( (resolve, reject) => {
        let n = Math.random()
        setTimeout(() => {
            if(n> 0.5){
                // ok
                resolve(n)
            } else {
                // error
                reject(new Error(n))
            }
        })
    })
}

/* se hace que la función devuelva una promesa, Y LUEGO: función.then(si resultado ok).catch(si error) */

algoAsincPromise().then( response => console.log('Todo bien: ' + response))
                  .catch(error => console.error('Error: ' + error.message))


/* hay otra forma de resolverlo aún más moderna */

// ES6 async / await

//la funcion algoAsincPromise no se toca

/* envolvemos la función entre paréntesis y la autoinvocamos */

let x2 = 21; 
/*esta es la única vez en la que js te exige que haya un punto y coma antes del paréntesis, 
antes de la invocación de una función anónima */
/* async te permite declarar una función como asíncrona. Y dentro de la función podemos 
definir una variable con await y luego una promesa */
(async () => {
    try {
        let response = await algoAsincPromise()
        console.log('Todo bien async ' + response)
    } catch (error) {
        console.error('Error async ' + error.message)
    }
    
})()





