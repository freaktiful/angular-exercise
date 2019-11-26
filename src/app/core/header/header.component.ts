import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-header',
  templateUrl: './header.component.html',
 // template: `<h1>Hola<h1>`.
  styleUrls: ['./header.component.css']
  // styles: []
})
export class HeaderComponent implements OnInit {

  //titulo: string = 'Curso de Angular'; 
  titulo: string;
  logo: string;
  logoAlt: string;

  constructor() {
    //this.titulo = 'Curso de Angular'
   }

  ngOnInit() {
    this.titulo = 'Curso de Angular'
    this.logo = '../../../assets/logo.svg' //la url del logo
    /* como aquí no espera url, se puede hacer ctrl-espacio en la url del componente
    img en el html, que ahí sí que autocompleta con las rutas */
    this.logoAlt = "logo de angular"

  /*  setTimeout(() => {
      this.titulo = 'Ya estoy aburrida'
    }, 5000); */
  } /* como es interpolacion dinámica, el titulo cambia en la página al cambiar la variable */

  /*RECOMENDACIÓN. todo lo que pondrías en un constructor mejor ponlo en el onInit, porque así
  te aseguras de que ya tienes el DOM renderizado (en el constructor aún no está)
  
  Las inicializaciones se pueden hacer al declarar, en el constructor o en el onInit*/

}
/* los componentes pues lo mismo, se indica que son componentes con un decorador @Component */

/* el selector es cómo se va a llamar al componente para pintarlo. 
La vista que se va a cargar (donde está el html) es templateUrl.
También se puede poner "template:" y pegar el html directamente, si es poco.
Lo mismo con styleUrl, se puede poner styles y palante*/

/* si se quiere usar template o styles inline se puede decir al crear el componente:
ng g c patata -s -t (inline template e inline styles)

Si no se quieren poner tests unitarios, tb se puede añadir --skip-tests.

para cambiar el prefijo del componente se puede usar --p (--prefix) */