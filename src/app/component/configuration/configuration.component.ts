import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { Configuracion } from '../../modelo/congiguracion.model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  permitirRegistro = false;

  constructor(private router: Router, private configuracionServicio: ConfiguracionService) { }

  ngOnInit() {
    this.configuracionServicio.getCongiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(["/"]);

  }


}
