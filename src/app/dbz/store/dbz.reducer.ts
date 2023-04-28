import { createReducer, on } from "@ngrx/store";
import { PersonajeStore } from "../interfaces/dbz.interfaces";
import * as dbzActions from './dbz.actions';
const initialState: PersonajeStore[] = [
  {
    name: 'Goku',
    power: 10000,
    id: 'ass'
  },
  {
    name: 'Vegetta',
    power: 9000,
    id: '1222'
  },
  {
    name: 'Trunks',
    power: 8000,
    id: 'sdsd'
  }
]

export const dbzReducer = createReducer(
  initialState,
  on(dbzActions.agregarPersonaje, (state, { personaje }) => {
    const newState = [...state, personaje];
    return newState
  }),
  on(dbzActions.removerPersonaje, (state, { id }) => {
    const newState = state.filter(savedCharacter => savedCharacter.id !== id);
    return newState
  }),
);
