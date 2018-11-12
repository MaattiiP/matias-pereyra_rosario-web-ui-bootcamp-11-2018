import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const movies: Movie[] = [
      {id: 1 , name: "Terminator I" , duration:108, year:1984 , ratingFA:7.1},
      {id: 2 , name: "Nueve Reinas" , duration:114, year:2000 , ratingFA:7.8},
      {id: 3 , name: "Reservoir Dogs" , duration:99, year:1992 , ratingFA:8.1},
      {id: 4 , name: "Djano Unchained" , duration:165, year:2012 , ratingFA:7.9},
      {id: 5 , name: "A Beautiful Mind" , duration:130, year:2001 , ratingFA:7.5},
      {id: 6 , name: "The Godfather" , duration:175, year:1972 , ratingFA:9.0},
      {id: 7 , name: "Fight Club" , duration:139, year:1999 , ratingFA:8.1},
      {id: 8 , name: "Deadpool" , duration:106, year:2016 , ratingFA:6.8},
      {id: 9 , name: "John Wick" , duration:101, year:2014 , ratingFA:6.2}
  ]
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
  constructor() { }
}
  

