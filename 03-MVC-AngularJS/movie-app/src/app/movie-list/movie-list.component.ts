import { Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies: Movie[];
  selectedMovie: Movie;
  hideValue: Boolean;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  onSelect(movie: Movie){
    this.selectedMovie = movie;
    this.hideValue = true;
  }
  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }
  add(name: string,duration:number,year:number,ratingFA:number): void {
    name = name.trim();
    duration = duration;
    year = year;
    ratingFA = ratingFA;
    if (!name) { return; }
    if(!duration){return;}
    if(!year){return;}
    this.movieService.addMovie({ name, duration, year, ratingFA } as Movie)
      .subscribe(hero => {
        this.movies.push(hero);
      });
  }
  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteHero(movie).subscribe();
  }
}
 
