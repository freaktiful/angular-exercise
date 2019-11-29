import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from '../../models/libro.model';
import { LIBROS } from 'src/app/models/libros.data';
import { LibrosMockService } from '../../services/libros.mock.service';

@Component({
  selector: 'aub-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {

  fcClave: FormControl;
  libros: Array<LibroModel>

  constructor(private mockService: LibrosMockService) {
   }

  ngOnInit() {
    this.fcClave = new FormControl();
    this.libros = new Array<LibroModel>();
  }

  onBuscar() {
    if(!this.fcClave.value){
      return;
    }
    console.log('Buscando')
    this.libros = LIBROS 
  }

  onBuscarAsinc() {
    if(!this.fcClave.value){
      return;
    }
    console.log('Buscando asincronamente')
   // this.libros = this.mockService.getLibros(this.fcClave.value)
    this.mockService.getLibrosAsinc(this.fcClave.value)
      .then((data:Array<LibroModel>) => {this.libros = data})
  }

  onDelete() {
    this.libros = [];
  }

}
