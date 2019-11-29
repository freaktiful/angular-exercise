import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibroModel } from '../models/libro.model';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class LibrosGoogleService {

  url: string;
  /** los servicios también pueden inyectarse a servicios: */
  constructor(private http: HttpClient) { 
    /** en el constructor porque como esto no se renderiza, es solo lógica, no hay ngOnInit */
    this.url = environment.urlLibros;
  }

  //promesa
  getPromise(title: string): Promise<Array<LibroModel>>{
   return this.http.get(this.url + title).toPromise().then(
     (res: any) => {
       return res.items.map(x => {
         return new LibroModel(x.id, x.volumeInfo.authors, x.volumeInfo.title)
        })
     }
     /** hay 3 returns porque hay que mantener la estructura de Promise */
   )
  }

  //observable
  getRx(title: string): Observable<Array<LibroModel>>{
    return this.http.get(this.url + title).pipe(
      /** el pipe me permite usar cualquier operador de observables que me interese. 
       * pipe().map me permite manipular los datos de la estructura de datos, sin perder el 
       * observable.
      */
      map( (data: any) => {
        return data.items.map(x => {
          return new LibroModel(x.id, x.volumeInfo.authors, x.volumeInfo.title)
        })
      } )
    )
  }
}
