import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Cliente} from '../carnesLadiferencia/models/clientes';
import {HandleHttpErrorService} from '../@base/handle-http-error.service';
import {catchError, map, tap} from 'rxjs/operators';
import { from } from 'rxjs';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl:string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseurl:string,
    private handleErrorService:HandleHttpErrorService) 
    {
      this.baseUrl= baseurl;
     }

     get(): Observable<Cliente[]> {
       return this.http.get<Cliente[]>(this.baseUrl + 'api/clientes')
       .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente[]>('Consultar clientes', null))
       );
     }

     post(clientes:Cliente): Observable<Cliente>{
       return this.http.post<Cliente>(this.baseUrl + 'api/clientes', clientes)
       .pipe(
         tap(_ => this.handleErrorService.log('datos enviados')),
         catchError(this.handleErrorService.handleError<Cliente>('Registrar clientes', null))
       );
     }
}
