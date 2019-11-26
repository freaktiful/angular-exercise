import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import { TareaModel } from 'src/app/models/tarea.model';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'aub-tarea-simple',
  templateUrl: './tarea-simple.component.html',
  styleUrls: ['./tarea-simple.component.css']
})
export class TareaSimpleComponent implements OnInit {

  tareas: Array<TareaModel>;
  nuevaTarea: TareaModel;

  faTrashAlt: IconDefinition;

  storeName: string;

  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;


  constructor() { }

  ngOnInit() {
    this.storeName = 'tareas'

    /* El localStorage es para guardar cosas sin llegar a meterlas en el servidor. getItem
    devuelve un string con la estructura de datos, hay que pasarla a array con JSON.parse()*/
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []

    /* en js el || se puede usar para asignaciones, si la primera no es nula, se asigna 
    la primera, y si lo es, se asigna lo segundo */

    this.nuevaTarea = new TareaModel();
    this.faTrashAlt = faTrashAlt;

    /* localstorage tiene 4megas y es para almacenar cosas. Es local a la url y al navegador.
    No se puede escribir sobre él desde el servidor (en las cookies sí)*/
  }

  onAddTarea() {
    if(!this.nuevaTarea.nombre){
      return
    }
    this.tareas.push(this.nuevaTarea);
    /*después de añadir hay que hacer new de nuevaTarea para que no se mantenga la referencia
    y al añadir más todos los elementos del vector valgan lo mismo */
    this.nuevaTarea = new TareaModel();

    this.actualizarStore();
  }

  onDeleteConfirm() {
    this.confirmar.nativeElement.showModal();
  }

  onDeleteTareas(ev){
    if(ev){
      this.tareas= [];
      //this.actualizarStore(); se pueden usar las dos instrucciones.
      localStorage.removeItem(this.storeName);
    }
    this.confirmar.nativeElement.close();
  }

  onChange(ev){
    this.actualizarStore();
    /* para cambiarle el estilo a las tareas se van a usar clases desde el punto de vista de angular */
  }

  onDelete(index: number){
    this.tareas.splice(index, 1);
    this.actualizarStore();
  }

  private actualizarStore() {
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
  }

}
