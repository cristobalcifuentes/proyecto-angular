import { Component, OnInit } from '@angular/core';
import { Farmacia } from '../../modelo/farmacia.model';
import { FarmaciasService } from '../../servicios/farmacias.service';

@Component({
  selector: 'app-farmacias-turno',
  templateUrl: './farmacias-turno.component.html',
  styleUrls: ['./farmacias-turno.component.css']
})
export class FarmaciasTurnoComponent implements OnInit {

  constructor(private farmaciaService: FarmaciasService) { }

  farmacias: Farmacia [] = []
  farmaciasTurno: Farmacia [] = []

  ngOnInit() {
    this.getFarmaciaTurno()
    this.getAllFarmacias()

  }

  getAllFarmacias(){
    this.farmacias = this.farmaciaService.getAllFarmacias()
  }

  getFarmaciaTurno(){
    this.farmaciasTurno = this.farmaciaService.getFarmaciasTurno()
  }

}
