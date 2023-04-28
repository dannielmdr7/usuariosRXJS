import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListadoPersonajesComponent } from './components/listado-personajes/listado-personajes.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoPersonajesComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }
