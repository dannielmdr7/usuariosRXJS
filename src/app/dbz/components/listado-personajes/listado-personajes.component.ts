import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Observable } from 'rxjs'
import { Personaje, PersonajeStore } from '../../interfaces/dbz.interfaces';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent {
  personajes$: Observable<PersonajeStore[]>;
  constructor(private dbzService: DbzService) {
    this.personajes$ = this.dbzService.personajes$;
  }
  removeCharacter(id: string) {
    this.dbzService.removePersonaje(id);
  }
}
