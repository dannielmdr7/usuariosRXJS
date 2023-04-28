import { createAction, props } from "@ngrx/store";
import { PersonajeStore } from "../interfaces/dbz.interfaces";

export const agregarPersonaje = createAction('[DBZModule] Agregar un personaje', props<{personaje:PersonajeStore}>() );
export const removerPersonaje = createAction('[DBZModule] Remover un personaje', props<{id:string}>() );
