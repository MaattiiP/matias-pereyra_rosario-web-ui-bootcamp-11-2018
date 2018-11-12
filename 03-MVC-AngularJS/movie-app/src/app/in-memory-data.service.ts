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
      {id: 2 , name: "test2" , duration:222, year:2222 , ratingFA:22.2},
      {id: 3 , name: "test3" , duration:333, year:3333 , ratingFA:33.3},
      {id: 4 , name: "test4" , duration:444, year:4444 , ratingFA:44.4},
      {id: 5 , name: "test5" , duration:555, year:5555 , ratingFA:55.5},
      {id: 6 , name: "test6" , duration:666, year:6666 , ratingFA:66.6},
      {id: 7 , name: "test7" , duration:777, year:7777 , ratingFA:77.7},
      {id: 8 , name: "test8" , duration:888, year:8888 , ratingFA:88.8},
      {id: 9 , name: "test9" , duration:999, year:9999 , ratingFA:88.9}
  ]
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
  constructor() { }
}
  

