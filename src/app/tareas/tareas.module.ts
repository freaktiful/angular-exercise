import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { TareaSimpleComponent } from './tarea-simple/tarea-simple.component';
import { TareaPlusComponent } from './tarea-plus/tarea-plus.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MainComponent, MenuComponent, TareaSimpleComponent, TareaPlusComponent],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class TareasModule { }
