import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';


const routes: Routes = [
  /* esto es lo que hace que AboutComponent sea el componente principal, que la ruta es '', 
  o sea, es el componente raíz*/
  { path: '', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
