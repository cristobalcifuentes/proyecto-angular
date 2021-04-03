import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre:'',
    apellido:'',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm", {static: false}) clienteForm: NgForm;

  @ViewChild("botonCerrar", {static: false}) botonCerrar: ElementRef;

  constructor(private clienteServicio: ClienteService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente =>{
        saldoTotal += cliente.saldo
      })
    }
    return saldoTotal;
  }

  agregar({value, valid}: {value: Cliente, valid: boolean}){
    if(!valid){
      this.flashMessages.show("formulario no correcto", {
        cssClass: 'alert-danger', timeout: 4000
      })
    }
    else{
      this.clienteServicio.agregarCliente(value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }

  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }

}
