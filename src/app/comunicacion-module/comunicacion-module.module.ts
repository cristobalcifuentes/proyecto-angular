import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';



@NgModule({
  declarations: [PadreComponent, HijoComponent],
  imports: [
    CommonModule
  ]
})
export class ComunicacionModuleModule { }
