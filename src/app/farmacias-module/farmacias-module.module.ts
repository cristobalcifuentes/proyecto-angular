import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoFarmaciasComponent } from './component/listado-farmacias/listado-farmacias.component';
import { DetalleFarmaciasComponent } from './component/detalle-farmacias/detalle-farmacias.component';
import { FarmaciasTurnoComponent } from './component/farmacias-turno/farmacias-turno.component';
import { FarmaciasRoutingModule } from './farmacias-routing.module';



@NgModule({
  declarations: [ListadoFarmaciasComponent,
     DetalleFarmaciasComponent,
      FarmaciasTurnoComponent],
  imports: [
    CommonModule,
    FarmaciasRoutingModule
  ]
})
export class FarmaciasModule { }
