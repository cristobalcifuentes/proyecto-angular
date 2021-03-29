import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { TableComponent } from './component/table/table.component';


const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'config', component: ConfigurationComponent},
  {path: 'cliente/edit/:id', component: EditClientComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
