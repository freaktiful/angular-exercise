import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { TareasStoreService } from 'src/app/services/tareas-store.service';

@Component({
  selector: 'aub-tarea-plus',
  templateUrl: './tarea-plus.component.html',
  styleUrls: ['./tarea-plus.component.css']
})
export class TareaPlusComponent implements OnInit {

  tareas: Array<TareaModel>;
//  storeName: string;
  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;
  constructor(private storeService: TareasStoreService) { }

  ngOnInit() {
  //  this.storeName = 'tareas' // puede ser el mismo u otro que el de simples.
  //  this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []
  // quitamos lo del localStorage y lo cambiamos por el servicio.
    this.tareas = this.storeService.getTareas();
  }

  onAddTarea(ev: TareaModel){
    this.tareas.push(ev);
    this.actualizarStore();
  }

  onDeleteTarea(i: number) {
    this.tareas.splice(i,1)
    this.actualizarStore();
  }

  onChangeTarea(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    this.actualizarStore();
  }

  onEditTarea(ev){
    this.tareas[ev.i].nombre = ev.nombre;
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

  private actualizarStore() {
    //localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
    this.storeService.setTareas(this.tareas);
  }

 

}
