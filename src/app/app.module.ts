import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
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
import { ClienteService } from './clientes-module/servicios/cliente.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionService } from './servicios/configuracion.service';
import { RegistroGuard } from './guards/registro.guard';
import { FarmaciasModule } from './farmacias-module/farmacias-module.module';
import { ClientesModuleModule } from './clientes-module/clientes-module.module';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './component/index/index.component';
import { ComunicacionModuleModule } from './comunicacion-module/comunicacion-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NotFoundComponent,
    FooterComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModuleModule,
    ComunicacionModuleModule,
    FarmaciasModule,
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
