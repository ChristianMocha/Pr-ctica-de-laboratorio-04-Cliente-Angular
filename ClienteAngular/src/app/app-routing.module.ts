import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pageabout404Component } from './pages/pageabout404/pageabout404.component';
import { MicuentaComponent } from './pages/micuenta/micuenta.component'
import { PedidosComponent } from './pages/pedidos/pedidos.component'
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DireccionComponent } from './pages/direccion/direccion.component'
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarritoComponent } from './pages/carrito/carrito.component'

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
    path: 'carrito',
    component: CarritoComponent
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
