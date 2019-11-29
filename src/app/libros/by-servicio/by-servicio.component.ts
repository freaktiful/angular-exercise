import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LibrosGoogleService } from 'src/app/services/libros-google.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'aub-by-servicio',
  templateUrl: './by-servicio.component.html',
  styleUrls: ['./by-servicio.component.css']
})
export class ByServicioComponent implements OnInit {

  fcClave: FormControl;
  libros: Array<LibroModel>;
  libros$: Observable<Array<LibroModel>>

  constructor(private lgService: LibrosGoogleService) {
   }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = new Array<LibroModel>();
  }

  onBuscar() {
    if(!this.fcClave.value){
      return;
    }

    this.lgService.getPromise(this.fcClave.value).then( data => this.libros = data )
    this.fcClave.reset();
  }

  /** esto sería otra forma de recoger la promesa sin usar el then, poner una funcion
   * async, y un await.
   */
  async onBuscarAsinc() {
    if(!this.fcClave.value){
      return;
    }
    this.libros = await this.lgService.getPromise(this.fcClave.value);
    this.fcClave.reset();
  }

  onBuscarRx() {
    if(!this.fcClave.value){
      return;
    }
    /** subscribe es lo mismo que el then de las promises */
    this.lgService.getRx(this.fcClave.value).subscribe(res => this.libros = res)
    this.fcClave.reset();
  }

  onDelete(){
    this.libros = []
  }

}
