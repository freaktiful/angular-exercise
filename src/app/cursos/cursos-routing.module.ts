import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { SingleComponent } from './single/single.component';


const routes: Routes = [
  { path:'', component: CursosComponent},
  {
    path: '', 
    component: CursosComponent,
    children: [
      { path: 'inscrip', component: InscripComponent },
      { path: 'alumnos', component: AlumnosComponent },
      { path: 'alumnos/single/:id', component: SingleComponent }
    ]
  },
  /** para el enrutado con parámetros. Lo importante son los dos puntos, luego lo puedes
   * llamar como te de la gana
   */
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
