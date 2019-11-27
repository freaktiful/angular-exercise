import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'aub-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  /* al definir un input, he creado una propiedad html de ese componente. Y en ellos se puede
  inyectar el valor que de la gana desde el padre*/
  @Input() item: TareaModel;
  @Input() i: number;
  /* no es lo mismo pasar por input un objeto que un número. Si cambio un número no pasa nada, pero si 
  cambio el objeto, estoy cambiando el objeto del padre también porque lo que se pasa es una
  referencia. Pero si cambio i no altero el valor de i del padre. */
  /* trabajar directametne sobre una referencia a un objeto que está en otro sito es mala 
  practica. Para evitar ese problema nos creamos un objeto tarea interno para trabajar con él
  y clonamos el externo.*/
  @Output() onDelete: EventEmitter<number>

  @Output() onChange: EventEmitter<number>

  @Output() onEdit: EventEmitter<{nombre: string, i: number}> //le pasamos un interfaz anónimo y punto.
  /* que podemos crear la interfaz en la carpeta models y referirnos a ella así, pero 
  no hace falta porque solo se usa para esto  ng g intervace models/EditTarea (y luego 
    habría que cambiarle el nombre al archivo porque no le pone 'interface' en el nombre
    de archivo*/
  faTrashAlt: IconDefinition;

  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onEdit = new EventEmitter();
  }

  ngOnInit() {
    /* convierto a item en el clon de lo que viene del padre, y así no toco la referencia
    al padre (también se habría podido clonar desde fuera, si hubiera sido posible) */
    this.item = {...this.item}
    this.faTrashAlt = faTrashAlt;
  }

  onSendChange(ev) {
    /* es un interruptor en plan "cambiame el estado de esto"*/
    this.onChange.next(this.i);
  }

  onSendEdit(ev) {
    this.onEdit.next({nombre: ev.target.textContent, i: this.i})
  }

  onModify(ev: any, index: number) {
    /* se puede pasar el evento y hacer que el elemento del DOM anterior pase a contenteditable*/
    ev.target.previousElementSibling.setAttribute('contenteditable', true)
    /* hay una recomendación de angular que es que si hay que modificar atributos del DOM
    que se haga mediante directivas de angular, no a lo bruto. Se podria hacer nuetra
    propia directiva pero ya veremos si lo vemos. */
  }

  onSendDelete(){
    this.onDelete.next(this.i);
  }
}
