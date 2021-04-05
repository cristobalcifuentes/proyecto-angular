import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = "";
  @Output() cambioNombreHijo = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(){

    this.cambioNombreHijo.emit(this.nombreHijo);
  }


}
