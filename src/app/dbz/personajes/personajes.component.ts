import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  constructor(private DbzService: DbzService) {}

  // receive data from parent component (MainPageComponent)
  // @Input() personajes: Personaje[] = [];
  get personajes() {
    return this.DbzService.personajes;
  }

}
