import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';

@Injectable(//{
  //providedIn: 'root'
  /*la forma nueva de declarar el proveedor del servicio es ponerlo en los metadatos de
  la anotación @Injectable. Por defecto es 'root', que es que están disponibles para 
  toda la app */
//}
)
export class TareasStoreService {
/**es una clase. No tiene ciclo de vida, no implementa ningún interfaz... es solo 
 * lógica que le metamos nosotros.
 */

  storeName: string;

  constructor() {
    this.storeName = 'tareas';
  }

  getTareas(): Array<TareaModel> {
    let r: Array<TareaModel> = JSON.parse(localStorage.getItem(this.storeName));
    if(!Array.isArray(r)){ r = []} // esta función es para saber si un objeto es array.
    return r
  }

  setTareas(datos: Array<TareaModel>): void {
    localStorage.setItem(
      this.storeName,
      JSON.stringify(datos));
  } 

  removeTareas(): void {
    localStorage.removeItem(this.storeName);
  }
}
