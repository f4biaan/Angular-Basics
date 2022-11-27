import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7000,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Gohan',
    poder: 0,
  };

  agregarNuevoPersonaje(arg: Personaje) {
    // console.log(arg);
    this.personajes.push(arg);
    // console.log(this.personajes);
  }
}
