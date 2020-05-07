import { Pipe, PipeTransform } from '@angular/core';
import {Cliente} from '../carnesLadiferencia/models/clientes';
import { from } from 'rxjs';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(clientes: Cliente[], searchText:string): any {
    if(searchText==null) return clientes;
    return clientes.filter(p=>p.nombres.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || p.identificacion.indexOf(searchText)!== -1);
  }

}
