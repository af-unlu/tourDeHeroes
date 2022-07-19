import { Injectable } from '@angular/core';
import { Hero } from './Models/hero';
import { HEROES } from './Models/heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService:MessageService) { }
  async getHeroes():Promise<Observable<Hero[]>>{
    await new Promise(r => setTimeout(r, 2000));
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  async getHero(id:number):Promise<Observable<Hero>>{
    await new Promise(r => setTimeout(r, 100));
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
