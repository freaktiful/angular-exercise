import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from '../../models/libro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'aub-apigoogle',
  templateUrl: './apigoogle.component.html',
  styleUrls: ['./apigoogle.component.css']
})
export class ApigoogleComponent implements OnInit {

  fcClave: FormControl;
  libros: Array<LibroModel>;
  url: string;

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = new Array<LibroModel>();
    this.url = environment.urlLibros;
  }

  onBuscar() {
    if(!this.fcClave.value){
      return;
    }
    const url = this.url + this.fcClave.value;
    
    /** el get devuelve un observable. Podemos cambiarlo a provesa con toPromise */
    this.http.get(url).toPromise().then(
      (data: any) => {
        /** mirar lo útil que resulta map para pasar de una estructura a otra
         * cuando tenemos que pasar de un array a otro
         */
        console.log(data.items.map(x => new LibroModel(x.id, x.volumeInfo.authors, x.volumeInfo.title)))
        this.libros = data.items.map(x => new LibroModel(x.id, x.volumeInfo.authors, x.volumeInfo.title))
    })
  }
  /** pero esto está mal porque la lógica tiene que estar en el servicio, no en el 
   * componente
   */

}
