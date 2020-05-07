import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/clientes';
import {ClientesService} from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css']
})
export class ClientesConsultaComponent implements OnInit {

  clientess:Cliente[];
  searchText:string;
  constructor(private clientesservice: ClientesService) { }

  ngOnInit() {

    this.get();
  }
     get(){
       this.clientesservice.get().subscribe(result=>{
         this.clientess=result;
         console.log(this.clientess);
       });
     }

}
