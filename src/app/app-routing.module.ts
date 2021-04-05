import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroGuard } from './guards/registro.guard';
import { IndexComponent } from './component/index/index.component';
import { ComunicacionModuleModule } from './comunicacion-module/comunicacion-module.module';


const routes: Routes = [
  {path: '', component: IndexComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[RegistroGuard]},
  {path: 'config', component: ConfigurationComponent, canActivate:[AuthGuard]},
  {path: 'clientes', loadChildren: () => import('./clientes-module/clientes-module.module').then(m=>m.ClientesModuleModule)},
  {path: 'farmacias', loadChildren: () => import('./farmacias-module/farmacias-module.module').then(m=>m.FarmaciasModule), },
  {path: 'comunicacion', loadChildren: () => import('./comunicacion-module/comunicacion-module.module').then(m=>m.ComunicacionModuleModule), },

  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
