import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { AlumnoShorModel } from '../models/alumno.model';


@Injectable()
export class AlumnosService {

  url: string;

  constructor(private http: HttpClient) { 
    this.url = environment.urlUsuarios
  }

  create(alumno: AlumnoShorModel): Observable<AlumnoShorModel>{
    return this.http.post(this.url, alumno) as Observable<AlumnoShorModel>;
  }

  read(id: number): Observable<AlumnoShorModel>{
    /* habría que hacer una función que mirara si la url tiene barra al final para
    ponersela o no, pero como en este caso concreto se la hemos puesto, 
    pues no hacemos nada aquí */
    return this.http.get(this.url+id) as Observable<AlumnoShorModel>
  }

  readAll(): Observable<Array<AlumnoShorModel>> {
    /** se hace casting forzado */
    return this.http.get(this.url) as Observable<Array<AlumnoShorModel>>
  }

  update(alumno: AlumnoShorModel): Observable<AlumnoShorModel>{
    return this.http.patch(this.url + alumno.id, alumno) as Observable<AlumnoShorModel>
  }  

  delete(id: number): Observable<Object>{
    /** este api concreto devuelve un objeto vacío en esta operación, por eso se pone
     * el tipo ese de return.
     */
    return this.http.delete(this.url + id)
  }
}

/** ES IMPORTANTE QUE SEPAMOS QUE LOS OBSERVABLES SON ASÍNCRONOS, Y HAY QUE SUSCRIBIRSE
 * A ESAS OPERACIONES PORQUE SI NO NO SE EJECUTAN.
 */
