import { Component, OnInit } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../shared/validators'

@Component({
  selector: 'aub-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: [ '../cursos.component.css',
    './form-md.component.css']
})
export class FormMdComponent implements OnInit {

  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;

  formCurso: FormGroup;
  /* los formgroup se construyen usando FormBuilder, que hay que importarlo como cualquier 
  servicio */

  alumno: AlumnoModel;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.turnos = TURNOS;
    this.cursos = CURSOS;


    /** aquí los validadores se definen en el ts */
    this.formCurso = this.formBuilder.group(
      {
       nombre: ['', [Validators.required]],
       apellidos: ['', [Validators.required]],
       dni: ['', [Validators.required, Validators.minLength(9)]],
       passwd: ['', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$') ]],
       email: ['@sample.com', [Validators.required]],
       comments: ['', [Validators.required]],
       nacim: ['', [Validators.required]],
       isOk: ['', [Validators.required]],
       turno: ['', [Validators.required]],
       curso: ['', [Validators.required]] }
    );

    //PasswordValidator.funcionQueSea

    /** pero los comentarios no hay forma de hacerlos de otro modo. */

    console.log(this.formCurso);
  }

  onSubmit() {

    /** de dónde saco el alumno? como la estructura es la misma, se puede hacer */
    this.alumno = this.formCurso.value

    /** pero si la estructura no fuera la misma, habría que construir el elemento
     * campo a campo
     */
    //this.alumno = new AlumnoModel(this.formCurso.value.nombre, this.formCurso..


    console.log('Enviando', this.alumno);
    //console.log(this.formCurso);
    //TODO: enviar datos
  }

}
