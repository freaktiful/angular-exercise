import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../shared/shared.module';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscripComponent } from './inscrip/inscrip.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [CursosComponent, FormTdComponent, FormMdComponent, InscripComponent, AlumnosComponent, MenuComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
