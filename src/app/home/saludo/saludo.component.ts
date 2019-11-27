import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aub-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
  //animations:
})

/* el decorador Component admite muchos más metadatos */
/* encapsulación se refiere a hasta qué punto está aislado el css de la vista
con respecto a todo lo demás.
Emulated - permite la entrada pero no la salida de estilos de fuera (es la por defecto)
ShadowDom - todo el css tiene que ser interno, cualquier estilo de fuera no se aplica
None - no encapsula nada, los estilos que defina dentro se aplican tb fuera
*/
/*en styleUrls se pueden meter varias hojas de estilos, que es un vector. */
/** change detection strategy solo tiene default y onPush.
 * En su estado normal si un objeto tiene un hijo y quiere ver si ha cambiado, lee sus 
 * propiedades para ver si han cambiado.
 * si se cambia a OnPush solo mira si las referencias cambian, porque al parecer es
 * cuando los objetos no van a cambiar. npm install inmutable hace que los objetos
 * sean siempre inmutables. Entonces se puede cambiar a OnPush.
 * Pero cambiar los objetos es más lento porque hay que destruirlo y volverlo a crear.
 * (la propiedad freeze es nativa de js y permite crear objetos inmutables)
 * 
 * animations: es animaciones de css definidas a través de Angular. 
 */
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
