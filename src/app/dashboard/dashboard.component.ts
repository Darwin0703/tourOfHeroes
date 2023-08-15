import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  standalone:true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    MatCardModule,
    RouterLink,
    NgFor,
    MatButtonModule,
    MatGridListModule
  ]
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){

  }

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes.slice(0,5));
  }
}
