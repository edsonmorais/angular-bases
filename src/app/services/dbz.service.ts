import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../dbz/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Trunk",
      power: 10
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 100
    }
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuid(), ...character      
    };

    this.characters.push(newCharacter);
  }

  removeCharacter(id: string): void {
    this.characters = this.characters.filter(x => x.id !== id);
  }

}
