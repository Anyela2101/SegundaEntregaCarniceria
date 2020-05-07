import { Component, OnInit } from '@angular/core';
import {Cliente } from '../models/clientes';
import {ClientesService} from '../../services/clientes.service';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-clientes-registro',
  templateUrl: './clientes-registro.component.html',
  styleUrls: ['./clientes-registro.component.css']
})

export class ClientesRegistroComponent implements OnInit {
  formGroup: FormGroup;
  clientes: Cliente;
  constructor(private clientesService: ClientesService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.clientes= new Cliente();
    this.clientes.identificacion = '';
    this.clientes.nombres = '';
    this.clientes.apellidos = '';
    this.clientes.direccion = '';
    this.clientes.telefono = '';
    this.clientes.email = '';

    this.formGroup=this.formBuilder.group({
      identificacion: [this.clientes.identificacion, [Validators.required, Validators.min(10)]],
      nombres: [this.clientes.nombres, Validators.required],
      apellidos: [this.clientes.apellidos, Validators.required],
      direccion: [this.clientes.direccion, Validators.required],
      telefono: [this.clientes.telefono, [Validators.required, Validators.min(10)]],
      email: [this.clientes.email, Validators.required]
    });
    
  }

  get control(){
    return this.formGroup.controls;
  }
  
  onSubmit(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
  }

  add(){
    this.clientes= this.formGroup.value;
    this.clientesService.post(this.clientes).subscribe(p=>{
      if(p!=null){
        alert('cliente Creado!');
        this.clientes=p;
      }
    });
  }


}
