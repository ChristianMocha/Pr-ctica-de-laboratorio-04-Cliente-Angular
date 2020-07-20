import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { Pageabout404Component } from './pages/pageabout404/pageabout404.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { MicuentaComponent } from './pages/micuenta/micuenta.component'
import { PedidosComponent } from './pages/pedidos/pedidos.component'
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DireccionComponent } from './pages/direccion/direccion.component'


const routes: Routes = [
  {
    path: "",
    redirectTo: "/bodegas",
    pathMatch: "full"
  },
  
  {
    path: 'bodegas',
    component: BodegasComponent
  },
  {
    path: 'mi-cuenta',
    component: PedidosComponent
  },
  {
    path: 'mi-cuenta/editar',
    component: MicuentaComponent
  },
  {
    path: 'mi-cuenta/direccion',
    component: DireccionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
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
