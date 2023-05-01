import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    
    constructor(private dbzService: DbzService) {}

    get characters() {
        //utilizando o operador spread para retornar uma nova variável
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string) {
        this.dbzService.removeCharacter(id);
    }

    onNewCharacter(character: Character) {
        this.dbzService.addCharacter(character);
    }

}