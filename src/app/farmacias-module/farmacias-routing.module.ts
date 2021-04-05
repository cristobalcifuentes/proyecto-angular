import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FarmaciasTurnoComponent } from './component/farmacias-turno/farmacias-turno.component';
import { ListadoFarmaciasComponent } from './component/listado-farmacias/listado-farmacias.component';



const routes: Routes = [
  {path: 'listado', component: ListadoFarmaciasComponent,  canActivate:[AuthGuard]},
  {path: 'turno', component: FarmaciasTurnoComponent,  canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciasRoutingModule { }
