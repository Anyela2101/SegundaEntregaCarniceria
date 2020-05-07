import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientesRegistroComponent} from './carnesLadiferencia/clientes-registro/clientes-registro.component';
import {ClientesConsultaComponent} from './carnesLadiferencia/clientes-consulta/clientes-consulta.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes =[
  {
    path: 'clientesConsulta',
    component: ClientesConsultaComponent
  },
  {
    path: 'clientesRegistro',
    component:ClientesRegistroComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
