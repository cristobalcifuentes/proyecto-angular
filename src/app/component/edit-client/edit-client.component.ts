import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  cliente: Cliente = {
    nombre:'',
    apellido:'',
    email: '',
    saldo: 0
  }

  id: String;

  constructor(private clienteServicio: ClienteService, private flashMessages: FlashMessagesService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.clienteServicio.getCliente(this.id).subscribe( cliente => {
      this.cliente = cliente;
    })
  }

  guardarCliente({value, valid}: {value: Cliente, valid: boolean}){
    if(!valid){
      this.flashMessages.show("Formaulario mal completado",{
        cssClass: "alert-danger", timeout: 4000
      });
    }else{
      value.id = this.id;
      this.clienteServicio.modificarCliente(value);
      this.router.navigate(["/"]);
    }
  }

  eliminarCliente(){
    if(confirm("desea eliminar ")){
      this.clienteServicio.eliminarCliente(this.cliente);
      this.router.navigate(["/"]);
    }
  }

}
