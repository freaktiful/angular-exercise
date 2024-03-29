import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import { TareaModel } from 'src/app/models/tarea.model';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TareasStoreService } from 'src/app/services/tareas-store.service';

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

  isEditable:boolean;

  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;


  /**hay que poner el servicio en los parámetros del constructor, y el servicio tiene
   * que estar declarado como injectable y tener un provider. Y así automáticamente
   * ya llega la instancia hecha.
   */
  constructor(public storeService: TareasStoreService) { }

  ngOnInit() {
   // this.storeName = 'tareas'

    /* en js el || se puede usar para asignaciones, si la primera no es nula, se asigna 
    la primera, y si lo es, se asigna lo segundo */

    this.nuevaTarea = new TareaModel();
    this.faTrashAlt = faTrashAlt;

    /* localstorage tiene 4megas y es para almacenar cosas. Es local a la url y al navegador.
    No se puede escribir sobre él desde el servidor (en las cookies sí)*/

    this.isEditable = false;

    /* El localStorage es para guardar cosas sin llegar a meterlas en el servidor. getItem
    devuelve un string con la estructura de datos, hay que pasarla a array con JSON.parse()*/
    /*  COMENTO LA INSTRUCCIÓN PORQUE AHORA VA A IR POR SERVICIOS
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []
    */
   this.tareas = this.storeService.getTareas();


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
      //localStorage.removeItem(this.storeName);
      this.storeService.removeTareas();
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

  onModify(ev: any, index: number) {
    /* se puede pasar el evento y hacer que el elemento del DOM anterior pase a contenteditable*/
    // ANTES DE LA DIRECTIVA EL CÓDIGO ERA ESTE: 
    //ev.target.previousElementSibling.setAttribute('contenteditable', true)
    /* hay una recomendación de angular que es que si hay que modificar atributos del DOM
    que se haga mediante directivas de angular, no a lo bruto. Se podria hacer nuetra
    propia directiva pero ya veremos si lo vemos. */
    this.isEditable = true;
  }

  /** vamos a ver si podemos crear una directiva que haga que un elemen to sea editable.
   * (la directiva es hacerEditable)
   */

  onEdit(ev: any, i: number){
    this.tareas[i].nombre = ev.target.textContent
    this.actualizarStore();
    this.isEditable = false;
  }

  private actualizarStore() {
  //  localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
    this.storeService.setTareas(this.tareas);
  }

  /* esto que hemos hecho de editar clickando y luego usando elementos del DOM es javascript
  puro, no angular */

}
