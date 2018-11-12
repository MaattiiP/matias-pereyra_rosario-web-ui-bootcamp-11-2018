import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient) { }

  private moviesUrl = 'api/movies';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
  }
  updateHero (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, httpOptions)
  }
}
