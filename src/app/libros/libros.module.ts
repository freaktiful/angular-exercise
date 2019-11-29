import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockComponent } from './mock/mock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApigoogleComponent } from './apigoogle/apigoogle.component';
import { LibrosMockService } from '../services/libros.mock.service';
import { ByServicioComponent } from './by-servicio/by-servicio.component';
import { LibrosGoogleService } from '../services/libros-google.service';


@NgModule({
  declarations: [LibrosComponent, MockComponent, ApigoogleComponent, ByServicioComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LibrosMockService, LibrosGoogleService]
})
export class LibrosModule { }
