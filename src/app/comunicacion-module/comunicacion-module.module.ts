import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { ComunicacionRoutingModule } from './comunicacion-routing.module';
import { FormsModule } from '@angular/forms';
import { MiDirectivaDirective } from '../directive/mi-directiva.directive';



@NgModule({
  declarations: [PadreComponent, HijoComponent,
    MiDirectivaDirective],
  imports: [
    CommonModule,
    ComunicacionRoutingModule,
    FormsModule
  ]
})
export class ComunicacionModuleModule { }
