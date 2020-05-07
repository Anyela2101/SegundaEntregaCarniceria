import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClientesConsultaComponent } from './carnesLadiferencia/clientes-consulta/clientes-consulta.component';
import { ClientesRegistroComponent } from './carnesLadiferencia/clientes-registro/clientes-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { PipePipe } from './pipe.pipe';
import { FiltroClientePipe } from './pipe/filtro-cliente.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClientesConsultaComponent,
    ClientesRegistroComponent,
    PipePipe,
    FiltroClientePipe,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
