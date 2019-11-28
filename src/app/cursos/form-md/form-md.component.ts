import { Component, OnInit } from '@angular/core';
import { MaestroDatos } from 'src/app/models/alumno.model';
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
    console.log('Enviando', this.formCurso.value);
    //console.log(this.formCurso);
    //TODO: enviar datos
  }

}
