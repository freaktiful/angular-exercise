const saludo = 'Hola';
console.log(saludo);

/* tipos basicos primitivos */

let cadena: string;
let num: number;
let isOk: boolean;

/* no sé de qué tipo es algo o necesito que no tenga tipo concreto: */
let u: any
/* tipo combinado, puede ser de los dos tipos */
let id: string | number

/* arrays */
let data: [] //array de cualquier cosa
let data2: Array<any> //este espera que le digas de qué es el array, pero se le puede pasar un any.
let numbers: Array<number>

/* pero data2 y numbers están sin inicializar, hay que inicializarlos */
data2 = []
numbers = []
/* y ahora sí se les pueden meter elementos */
data2.push(1)

/* también se puede inicializar en la misma línea de la declaración, pero si lo vas a inicializar
puedes pasar de declararlo con new Array porque typescript tiene inferencia de tipos y no hace falta*/
let edades: Array<number> = [23, 34]
let edades2 = [23, 34]  //también es un array de number

