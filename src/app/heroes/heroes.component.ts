import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';
import { HEROES } from '../Models/heroes';

//injected service 
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


//@Component is a decorator function that specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    (await this.heroService.getHeroes())
    .subscribe(heroes => this.heroes = heroes);
  }
}
