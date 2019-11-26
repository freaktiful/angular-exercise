import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
//EMISOR DE EVENTOS
  @Output()  addTarea: EventEmitter<TareaModel>

  fcNombreTarea: FormControl;
  //nuevaTarea: TareaModel;


  constructor() { 
    /* el emisor de eventos tiene que estar disponible antes de renderizar el componente así 
    que hay que inicializarlo aquí */
    this.addTarea = new EventEmitter();
  }

  ngOnInit() {
    this.fcNombreTarea = new FormControl();
  }

  /* La comunicación hacia arriba, de hijo a padre, se realiza mediante eventos.
  Para lanzar eventos se necesita un elemento de tipo eventemit. */
  onAddTarea(ev: any){
    if(!this.fcNombreTarea.value) {
      return;
    }
    //this.nuevaTarea = new TareaModel(this.fcNombreTarea.value, false);
    /* next es el estándar de emisor de los observables */
    //se puede pasar this.nuevaTarea, o hacer un new y ya.
    this.addTarea.next(new TareaModel(this.fcNombreTarea.value, false))
    this.fcNombreTarea.reset();
  }



}
