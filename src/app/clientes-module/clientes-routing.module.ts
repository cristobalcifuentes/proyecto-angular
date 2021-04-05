import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { TableComponent } from './component/table/table.component';



const routes: Routes = [
  {path: '', component: TableComponent, canActivate:[AuthGuard]},
  {path: 'edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clientesRoutingModule { }
