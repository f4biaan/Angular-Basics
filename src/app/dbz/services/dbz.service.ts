import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  constructor() {}

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // los ... ayudan a que no se pueda alterar la variable es como una copia que va a permitir ver los valores // rompen la referencia e¿con esa variable
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
