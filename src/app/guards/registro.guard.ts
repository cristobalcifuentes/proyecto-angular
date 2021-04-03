import { CanActivate, Router } from "@angular/router";
import {Injectable} from '@angular/core'
import { AngularFireAuth } from "@angular/fire/auth";
import { ConfiguracionService } from "../servicios/configuracion.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RegistroGuard implements CanActivate{

  constructor(private router: Router,
    private configuracionServicio: ConfiguracionService ){}




  canActivate(): Observable<boolean>{
    return this.configuracionServicio.getCongiguracion().pipe(
      map( configuracion => {
        if(configuracion.permitirRegistro){
          return true;
        }
        else{
          this.router.navigate(["/login"]);
          return false;
        }
      })
    )
  }

}

