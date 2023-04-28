import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interfaces';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  newPersonaje: Personaje = { name: '', power: 0 };
  constructor(private dbzService: DbzService) {

  }
  savePersonaje() {
    if (this.newPersonaje.name === '' ) return;
    this.dbzService.savePersonaje(this.newPersonaje);
    this.newPersonaje = { name: '', power: 0 }

  }
}
