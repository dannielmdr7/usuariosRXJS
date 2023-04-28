import { createReducer, on } from "@ngrx/store";
import { Personaje } from "../interfaces/dbz.interfaces";
import * as dbzActions from './dbz.actions'
const initialState: Personaje[] = [
  {
    name: 'Goku',
    power: 10000
  },
  {
    name: 'Vegetta',
    power: 9000
  }
]

export const dbzReducer = createReducer(
  initialState,
  on(dbzActions.agregarPersonaje, (state, { personaje }) => {
    const newState = [...state, personaje];
    return newState
  }),
);
