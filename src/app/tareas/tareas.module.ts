import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { TareaSimpleComponent } from './tarea-simple/tarea-simple.component';
import { TareaPlusComponent } from './tarea-plus/tarea-plus.component';


@NgModule({
  declarations: [MainComponent, MenuComponent, TareaSimpleComponent, TareaPlusComponent],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
