import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//servicios
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipos:Array<any>=[];

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:EquipoService

  ) {
    //leyendo la url y el parametro de la ruta
      this.ruta.params.subscribe(parametro =>{
        console.log(parametro ['id']);
        console.log(this._servicio.obtenerUno(parametro ['id']))
        this.equipos = this._servicio.obtenerUno(parametro['id'])

        //this.equipos = this._servicio.obtenerUno(parametro ['id'])
      }) 
   }

  ngOnInit(): void {
  }

}
