import { createAction,props } from "@ngrx/store";
import { Personaje } from "../interfaces/dbz.interfaces";

export const agregarPersonaje = createAction('[Source] Event', props<{personaje:Personaje}>() );
