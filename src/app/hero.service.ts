import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService:MessageService,private http: HttpClient,) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add("HeroService: Heroes cargados")
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('Heroes cargados')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );;
  }
  
  getHero(id:number):Observable<Hero|undefined>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(
      tap(_ => this.log(`Heroe cargado con id= ${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
  }
  
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Heroe Actualizado con id= ${hero.id}`)),
      catchError(this.handleError<any>('Actualizar heroe'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
