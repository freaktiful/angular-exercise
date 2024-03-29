import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { TareaSimpleComponent } from './tarea-simple/tarea-simple.component';
import { TareaPlusComponent } from './tarea-plus/tarea-plus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NuevaComponent } from './nueva/nueva.component';
import { TareaComponent } from './tarea/tarea.component';
import { SharedModule } from '../shared/shared.module';
import { TareasStoreService } from '../services/tareas-store.service';


@NgModule({
  declarations: [MainComponent, MenuComponent, TareaSimpleComponent, TareaPlusComponent, NuevaComponent, TareaComponent],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SharedModule
  ],
  // esto si en vez de hacerlo global se define aquí, porque solo se usa en este módulo,
  // pues solo es visible desde el módulo
  providers: [
    TareasStoreService
  ]
})
export class TareasModule { }
