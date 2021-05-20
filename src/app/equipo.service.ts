import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] =[
    {nombre:'Ignacio', especialidad:'HTMl', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium possimus eaque aperiam corrupti distinctio laborum eum facere dolor nesciunt architecto minus molestias autem ducimus fuga ab sit pariatur at?'},
    {nombre:'Jose', especialidad:'VUE.JS', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium possimus eaque aperiam corrupti distinctio laborum eum facere dolor nesciunt architecto minus molestias autem ducimus fuga ab sit pariatur at?'}
  ]

  constructor() { 
    console.log('funcionando servicio!!!');
  }
  obtenerEquipo(){
    return this.equipo
  }
  obtenerUno(i){
    return this.equipo[i];
  }

}
