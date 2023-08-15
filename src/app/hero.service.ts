import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add("HeroService: Heroes cargados")
    return of(HEROES);
  }
  
  getHero(id:number):Observable<Hero|undefined>{
    this.messageService.add(`HeroService: Heroe cargado con id: ${id}`)
    return of(HEROES.find(heroe => heroe.id === id));
  }
}
