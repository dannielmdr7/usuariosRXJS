import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Personaje, PersonajeStore } from '../interfaces/dbz.interfaces';
import { Store } from '@ngrx/store'
import { v4 as uuidv4 } from 'uuid';
import * as DbzActions from '../store/dbz.actions'
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  personajes$: Observable<PersonajeStore[]> = new Observable;
  constructor(private store: Store<{ dbz: PersonajeStore[] }>) {
    this.personajes$ = store.select('dbz');
  }
  savePersonaje(personaje: Personaje) {
    const id = uuidv4();
    const newPersonaje = {
      ...personaje,
      id
    }
    this.store.dispatch(DbzActions.agregarPersonaje({ personaje: newPersonaje }))
  }
  removePersonaje(id: string) {
    this.store.dispatch(DbzActions.removerPersonaje({ id }))

  }
}
