import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TareaSimpleComponent } from './tarea-simple/tarea-simple.component';
import { TareaPlusComponent } from './tarea-plus/tarea-plus.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  /* aquí tengo que definir los subenrutamientos a-route-path-with-children */
  {
    path: '', 
    component: MainComponent,
    children: [
      { path: 'simple', component: TareaSimpleComponent },
      { path: 'plus', component: TareaPlusComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
