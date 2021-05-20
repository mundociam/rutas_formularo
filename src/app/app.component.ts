import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  animales:Array<any>=[
    {tipo:'perro', nombre:'Lisa',edad:10},
    {tipo:'gato', nombre:'Pepon', edad:2},
    {tipo:'pato', nombre:'Tantan', edad:7}
  ]

}
