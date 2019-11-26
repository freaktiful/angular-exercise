import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-tarea-plus',
  templateUrl: './tarea-plus.component.html',
  styleUrls: ['./tarea-plus.component.css']
})
export class TareaPlusComponent implements OnInit {

  tareas: Array<TareaModel>;
  storeName: string;
  constructor() { }

  ngOnInit() {
    this.storeName = 'tareas' // puede ser el mismo u otro que el de simples.
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []
  }

  onAddTarea(ev: TareaModel){
    this.tareas.push(ev);
    this.actualizarStore();
  }

  private actualizarStore() {
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
  }

}
