import { Injectable } from '@angular/core';
import { LIBROS } from '../models/libros.data';
import { LibroModel } from '../models/libro.model';

@Injectable(/*{
  providedIn: LibrosModule
}*/)
export class LibrosMockService {

  constructor() { }

  getLibros(clave: string) {
    return LIBROS
  }
  getLibrosAsinc(clave: string): Promise<Array<LibroModel>> {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(LIBROS);
      }, 2000);
    }
    )

    /** ESTO TAMBIÉN DEVUELVE UNA PROMESA QUE EN SU INTERIOR LLEVA LOS LIBROS, AUNQUE NO 
     * LLEVA RETARDO, ES INSTANTÁNEA.
     */
  //  return Promise.resolve(LIBROS);
  }
}
