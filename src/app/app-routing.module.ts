import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TareasModule } from './tareas/tareas.module';

/* Aquí se hace el enrutado*/
const routes: Routes = [
  /*Si alguien indica el path, cargar el componente tal*/
  /*{ path: 'home', component: HomeComponent }, 
  esta es la forma eager, pero mejor dejarlo todo perezoso. Para perezoso
  hay que poner el loadChildren ese, y en el router de home meter el componente. */

  { path: 'home', 
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  /* carga el modulo y le pasa el control al enrutador del modulo
  (y el modulo carga el componente que sea, y de esta forma el componente puede ser privado) */
  { path: 'tareas', 
   loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) },
  /* esta es la forma antigua de haderlo 
  { path: 'about', loadChildren: './about/about.module#AboutModule' }, */
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

  //nueva ruta para el formulario
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
  
  // este enrutado es el por defecto cuando no se mete nada, que te redirija a otro componente
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  //este path tiene que ser el último y es el de cuando se mete algo que no encaja con nada
  { path: '**', redirectTo: 'home' } //o se puede hacer un componente de error y redireccionarlo
  // el componente error404 puede ir en el core o en otro sitio.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
