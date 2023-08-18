import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

   createDb(){
    
    const heroes: Hero[] = [
      { id: 11, name: 'Spiderman', image: 'assets/images/marvel/spiderman.jpg', logo: 'assets/images/marvel/logos/spiderman.jpg', descripcion: 'Científico, vigilante, profesor, fotógrafo, superhéroe. Fuerza, velocidad, durabilidad, agilidad, sentidos, reflejos, coordinación, equilibrio y resistencia sobrehumanos. Fisiología de la araña: Precognitiva capacidad de sentido arácnido, se aferra a la mayoría de las superficies sólidas y la capacidad de las redes.'},
      { id: 12, name: 'Ironman', image: 'assets/images/marvel/ironman.jpg', logo: 'assets/images/marvel/logos/ironman.png', descripcion: 'Iron Man es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics, nacido en Sofía, Bulgaria. El personaje fue creado en colaboración por el escritor y editor Stan Lee y el guionista Larry Lieber.​ Los artistas Don Heck y Jack Kirby fueron los encargados de su diseño.' },
      { id: 13, name: 'Hulk', image: 'assets/images/marvel/hulk.jpg', logo: 'assets/images/marvel/logos/hulk.png', descripcion: 'Comúnmente retratado como un salvaje furioso, Hulk ha sido representado con otras personalidades basadas en la mente fracturada de Banner, desde una fuerza descerebrada y destructiva hasta un brillante guerrero o genio científico por derecho propio.' },
      { id: 14, name: 'Dr Strange', image: 'assets/images/marvel/dr-strange.jpg', logo: 'assets/images/marvel/logos/strange.png', descripcion: 'Doctor Strange sirve como el Hechicero Supremo, el principal protector de la Tierra contra las amenazas mágicas y místicas. Inspirado en historias de magia negra y Chandu el Mago, Strange fue creado durante la edad de plata de los cómics para traer un tipo diferente de personajes y temas a Marvel.' },
      { id: 15, name: 'Capitan América', image: 'assets/images/marvel/capitan-america.jpg', logo: 'assets/images/marvel/logos/capitan.jpg', descripcion: 'Sentidos, agilidad, velocidad y fuerza sobrehumanas. Gran habilidad con su escudo. Instinto de liderazgo, gran resistencia, inmune a gases y enfermedades, curación y regeneración acelerada. Genio táctico, artista marcial, acróbata experto.'},
      { id: 16, name: 'Black Widow', image: 'assets/images/marvel/viuda-negra.jpg', logo: 'assets/images/marvel/logos/blackwidow.png', descripcion: 'La primera y más conocida Viuda Negra, es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca y apodada "Piquete de la Viuda".' },
      { id: 17, name: 'Wolverine', image: 'assets/images/marvel/wolverine.jpg', logo: 'assets/images/marvel/logos/wolverine.png', descripcion: 'Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano. Wolverine ha sido representado de diversas formas como miembro de los X-Men, Alpha Flight, Fuerza-X y Los Vengadores.' },
      { id: 18, name: 'Thor', image: 'assets/images/marvel/thor.jpg', logo: 'assets/images/marvel/logos/thor.png', descripcion: 'Thor es un excelente combatiente cuerpo a cuerpo, así como también resulta hábil en el combate armado, sobresaliendo en el uso del martillo de guerra, la espada, el hacha y la maza. Thor posee dos objetos que lo ayudan en combate: el Cinturón de Fuerza encantado y su arma distintiva, el martillo místico Mjolnir.'},
      { id: 19, name: 'Spiderman', image: 'assets/images/marvel/spiderman.jpg', logo: 'assets/images/marvel/logos/spiderman.jpg', descripcion: '####' },
      { id: 20, name: 'Spiderman', image: 'assets/images/marvel/spiderman.jpg', logo: 'assets/images/marvel/logos/spiderman.jpg', descripcion: '####' }
    ];
    return {heroes};
   }

   genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
