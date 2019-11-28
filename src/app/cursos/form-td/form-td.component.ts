import { Component, OnInit } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'aub-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: [ '../cursos.component.css',
    './form-td.component.css']
})
export class FormTdComponent implements OnInit {

  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;

  alumno: AlumnoModel;

  constructor() { }

  ngOnInit() {
    this.alumno = new AlumnoModel();
    
    this.turnos = TURNOS;
    this.cursos = CURSOS;

  }

}
