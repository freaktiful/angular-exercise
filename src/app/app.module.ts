import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* los modulos de ES son lo que se importa y exporta */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

// importa el archivo de idioma para la internacionalizacion
import es from '@angular/common/locales/es'
// esto es para registrar un paquete de datos de idioma
import { registerLocaleData } from '@angular/common';

registerLocaleData(es, 'es')

/* las importaciones normales de archivos luego son con ./ */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    //HomeModule si importas esto lo cargas inicialmente. Hay que quitarlo para que la carga sea lazy
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  // para cambiar el idioma de la app: 
  // en providers se listan los servicios que provee el modulo
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* los modulos de angular son clases que se exportan, pero que no tienen nada, solo están ahí 
para ponerle decoradores. Y el decorador que llevan los módulos es @NgModule.
Los decoradores son lo que declara, lo que importa, lo que exporta (este no tiene), que es
lo que ofrece como público a otros módulos, y los servicios que provee.
el módulo principal tiene un metadato especial que es bootstrap: que dice lo que se carga
al ppio cuando se llama la pagina */

