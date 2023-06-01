import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './Marvel-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }

}