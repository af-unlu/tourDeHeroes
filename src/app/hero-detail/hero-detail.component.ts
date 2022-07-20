import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Models/hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //outside parameter : '?' indicates that variable is optional
  @Input() hero?:Hero;
  
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location,
  ) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getHero(id);
  }

  async getHero(id:number): Promise<void> {
    (await this.heroService.getHero(id))
    .subscribe(hero => this.hero = hero);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}