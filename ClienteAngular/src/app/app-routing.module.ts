import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { Pageabout404Component } from './pages/pageabout404/pageabout404.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { MicuentaComponent } from './pages/micuenta/micuenta.component'
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'bodegas',
    component: BodegasComponent
  },
  {
    path: 'my-cuenta',
    component: MicuentaComponent
  },
  {
    path: '**',
    component: Pageabout404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
