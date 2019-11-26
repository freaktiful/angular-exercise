import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-tarea-simple',
  templateUrl: './tarea-simple.component.html',
  styleUrls: ['./tarea-simple.component.css']
})
export class TareaSimpleComponent implements OnInit {

  tareas: Array<TareaModel>;
  nuevaTarea: TareaModel;


  constructor() { }

  ngOnInit() {
    this.tareas = [];
    this.nuevaTarea = new TareaModel();
  }

  onAddTarea() {
    if(!this.nuevaTarea.nombre){
      return
    }
    this.tareas.push(this.nuevaTarea);
    /*después de añadir hay que hacer new de nuevaTarea para que no se mantenga la referencia
    y al añadir más todos los elementos del vector valgan lo mismo */
    this.nuevaTarea = new TareaModel();

    console.log(this.tareas)
  }

}
