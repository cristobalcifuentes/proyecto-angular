import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Farmacia } from '../modelo/farmacia.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmaciasService {

  farmacias: Farmacia[] = [];
  farmaciasTurno: Farmacia[] = [];


  constructor( private Http: HttpClient) { }

  getAllFarmacias(): Farmacia[]{
    this.farmacias = []
    console.log(environment.URL_BASE + environment.URL_ENDPOINT_ALL)
    this.Http.get<Farmacia[]>(environment.URL_BASE + environment.URL_ENDPOINT_ALL)
    .subscribe(farmacias=>{
      farmacias.forEach(farmacia=>{
        this.farmacias.push(farmacia)
      })
    });
    return this.farmacias
  }

  getFarmaciasTurno(){
    this.farmaciasTurno =[];
    this.Http.get<Farmacia[]>(environment.URL_BASE + environment.URL_ENDPOINT_TURNO)
    .subscribe(farmacias=>{
      farmacias.forEach(farmacia=>{
        console.log("entro")
        this.farmaciasTurno.push(farmacia)
      })
    });
    return this.farmaciasTurno
  }


}
