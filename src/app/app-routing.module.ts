import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { TableComponent } from './component/table/table.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroGuard } from './guards/registro.guard';


const routes: Routes = [
  {path: '', component: TableComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[RegistroGuard]},
  {path: 'config', component: ConfigurationComponent, canActivate:[AuthGuard]},
  {path: 'cliente/edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
