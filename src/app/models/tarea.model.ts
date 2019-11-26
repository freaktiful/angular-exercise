export class TareaModel {

    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false
    ) {}

}

/* en las clases es casi obligatorio darle valores por defecto al constructor */

/* otra opción sería definirlo como interfaz en vez de como clase:

export interface TareaIf {
    nombre: string
    isCompleted: boolean
}
*/
/* la diferencia es que al instanciar objetos de class se puede usar new, y en interface
se tendrá que hacer con {...} */

/* Y estos son los modelos que vamos a usar en Angular */
