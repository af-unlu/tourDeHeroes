import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
//@Component is a decorator function that specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    name:'WindStorm'
  }
  //for depency injection ??
  constructor() { }

  //Life cycle hook, initing logic
  ngOnInit(): void {
  }

}
