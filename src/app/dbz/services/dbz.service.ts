import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Store } from '@ngrx/store'
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  personajes$:Observable<Personaje[]> = new Observable;
  constructor(private store: Store<{dbz:Personaje[]}>) {
    this.personajes$ = store.select('dbz');
  }
}
