import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'aub-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {

  /* se pueden recoger las variables locales que se definen en el html con # de esta forma: */
  @ViewChild('refNombre', {static: true})
  nodoNombre: ElementRef;
  /* hasta la versión 8 el segundo campo era opcional pero ahora es obligatorio */
  constructor() { }

  ngOnInit() {
    console.log(this.nodoNombre);
  }

}
