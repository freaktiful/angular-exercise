export class AlumnoModel {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public passwd: string = '',
        public email: string = '',
        public comments: string = '',
        public nacim: Date = new Date(),
        public isOk: boolean = false,
        public turno: MaestroDatos = null,
        public curso: MaestroDatos = null 

    ){}
}

export class AlumnoShorModel {
    constructor(
        public id: number,
        public name: string = '',
        public curso: string = ''
    ){}
}

export class MaestroDatos {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public descripcion: string = ''
    ){}
}
