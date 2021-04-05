import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { ClientComponent } from './component/client/client.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ClienteService } from './servicios/cliente.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { clientesRoutingModule } from './clientes-routing.module';



@NgModule({
  declarations: [
    TableComponent,
    ClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    clientesRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClienteService, AngularFirestore]
})
export class ClientesModuleModule { }
