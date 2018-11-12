import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {Movie} from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie:Movie;
  @Input() id:Number;
  private movieService: MovieService;
  private location: Location;
  constructor() { }

  ngOnInit() {
  }
  save(): void {
    this.movieService.updateHero(this.movie)
      .subscribe(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }
}
