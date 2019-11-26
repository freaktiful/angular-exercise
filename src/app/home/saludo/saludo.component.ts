import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  mensaje: string;

  constructor() { }

  ngOnInit() {  
    this.mensaje = 'Escribe aquí tu nombre'
  }

  onClickBorrar(ev: Event){
    // el console.log es para ver qué se le pasa, nada más
    console.log(ev);
    // se le puede pasar el evento pero vamos, en este caso no hace falta.
    // pero pasa toda la info del evento en caso necesario
    this.nombre = '';
  }
}

/*
Hacer el double binding directamente con ngModel es que nombre es una variable, así que puede
cambiar por cualquier motivo, y la vista no se enteraría porque las variables no emiten eventos.
La vista tiene que estar constantemente vigilando el modelo y eso consume recursos (patron pull)

Seria menos costos que cuando la variable cambie, informe a la vista (patron push).
Esto se consigue en Angular con Observables.

*/
