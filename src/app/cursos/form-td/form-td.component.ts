import { Component, OnInit, ViewChild } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { NgForm } from '@angular/forms';

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

  @ViewChild('formRef', {static: true}) formCurso: NgForm;
  /** ngForm es el que tiene la estructura del formulario */

  constructor() { }

  ngOnInit() {
    this.alumno = new AlumnoModel();

    this.turnos = TURNOS;
    this.cursos = CURSOS;

  }

  onSubmit() {
    console.log('Enviando', this.alumno);
    //console.log(this.formCurso);
    //TODO: enviar datos
  }

}
