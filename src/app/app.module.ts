import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* los modulos de ES son lo que se importa y exporta */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

/* las importaciones normales de archivos luego son con ./ */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule
    //HomeModule si importas esto lo cargas inicialmente. Hay que quitarlo para que la carga sea lazy
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* los modulos de angular son clases que se exportan, pero que no tienen nada, solo están ahí 
para ponerle decoradores. Y el decorador que llevan los módulos es @NgModule.
Los decoradores son lo que declara, lo que importa, lo que exporta (este no tiene), que es
lo que ofrece como público a otros módulos, y los servicios que provee.
el módulo principal tiene un metadato especial que es bootstrap: que dice lo que se carga
al ppio cuando se llama la pagina */

