import { Component, OnInit } from '@angular/core';
import { MaestroDatos } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'aub-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;

  constructor() { }

  ngOnInit() {
    this.turnos = TURNOS;
    this.cursos = CURSOS;
  }

}
