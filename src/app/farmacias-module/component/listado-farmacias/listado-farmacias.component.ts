import { Component, OnInit } from '@angular/core';
import { Farmacia } from '../../modelo/farmacia.model';
import { FarmaciasService } from '../../servicios/farmacias.service';

@Component({
  selector: 'app-listado-farmacias',
  templateUrl: './listado-farmacias.component.html',
  styleUrls: ['./listado-farmacias.component.css']
})
export class ListadoFarmaciasComponent implements OnInit {

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
