import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, rank: 1, weakness: 'AUTO-CONTROLE', strenght: 'RESILIÊNCIA', name: 'HULK', power: 'FORÇA, RESISTÊNCIA À RADIAÇÃO, RESILIÊNCIA', tname: 'Bruce Banner', gen: 'M', des: 'Não deixe ele com raiva' },
      { id: 13, rank: 2, weakness: 'SONO DE ODIN', strenght: 'EXPERIÊNCIA',  name: 'THOR', power: 'FORÇA, VOAR, VELOCIDADE', tname: 'THOR', gen: 'M', des: 'Um deus' },
      { id: 14, rank: 3, weakness: 'ARROGÂNCIA', strenght: 'INTELIGÊNCIA', name: 'HOMEM DE FERRO', power: 'Dinheiro', tname: 'Tony Stark', gen: 'M', des: 'Eu sou o homem de ferro' },
      { id: 15, rank: 4, weakness: 'DEPENDE DO ESCUDO', strenght: 'LIDERANÇA', name: 'CAPITAO AMERICA', power:'Super Soldado', tname: 'Joao', gen: 'M', des: 'Ele é mais velho que você' },
      { id: 16, rank: 5, weakness: 'FALTA DE EMPATIA', strenght: 'BELEZA, ARTES MARCIAIS, AMBIÇÃO', name: 'VIUVA NEGRA', power: 'Agilidade', tname: 'Joao', gen: 'F', des: 'A única vingadora mulher' },
      { id: 17, rank: 6, weakness: 'MEDO DE ALTURA', strenght: 'MEDO DE ALTURA', name: 'GAVIAO ARQUEIRO', power: 'Precisão', tname: 'Joao', gen: 'M', des: 'Quem é ele mesmo?' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}