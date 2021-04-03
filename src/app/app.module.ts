import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TableComponent } from './component/table/table.component';
import { ClientComponent } from './component/client/client.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FooterComponent } from './component/footer/footer.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FormsModule} from '@angular/forms'
import { ClienteService } from './servicios/cliente.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionService } from './servicios/configuracion.service';
import { RegistroGuard } from './guards/registro.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ClientComponent,
    EditClientComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'prueba-angular'),
    AngularFireModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClienteService, AngularFirestore, LoginService, AuthGuard,
     ConfiguracionService, RegistroGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
