import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  permitirRegistro: boolean;

  constructor(private loginService: LoginService, private router: Router,
              private configuracionServicio: ConfiguracionService) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false
      }
    });

    this.configuracionServicio.getCongiguracion().subscribe(configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })

  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(["/login"]);
  }
}
