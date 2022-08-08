import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'DR. Martin'},
    { id: 11, name: 'Super Richard'},
    { id: 12, name: 'Superman'},
    { id: 13, name: 'Batman'},
    { id: 14, name: 'Joker'},
    { id: 15, name: 'Hulk'},
    { id: 16, name: 'Thor'},
    { id: 17, name: 'Iron man'},
    { id: 18, name: 'Spiderman'},
    { id: 19, name: 'Arthur'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
