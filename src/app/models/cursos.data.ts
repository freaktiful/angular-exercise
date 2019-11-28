import { MaestroDatos } from './alumno.model'

export const TURNOS: Array<MaestroDatos> = [
    new MaestroDatos('AM', 'Mañana', 'Horario de 10:00 a 14:00'),
    new MaestroDatos('PM', 'Tarde', 'Horario de 16:00 a 19:00'),
    new MaestroDatos('C', 'Completo', 'Horario de 09:00 a 18:00')
]


export const CURSOS: Array<MaestroDatos> = [
    new MaestroDatos('A001', 'Angular', 'bla blabla blabla blabla'),
    new MaestroDatos('R001', 'React', 'blebleble bleble bleble'),
    new MaestroDatos('V001', 'Vue', 'bli blibli blibli blibli')
]