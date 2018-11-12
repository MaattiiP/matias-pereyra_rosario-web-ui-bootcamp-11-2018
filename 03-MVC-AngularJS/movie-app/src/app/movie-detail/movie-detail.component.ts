import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie:Movie;
  @Input() hide:Boolean;
  
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  save(): void {
    this.movieService.updateHero(this.movie)
    //when the SAVE is trigger, the details will disappear.(Don't work)
    //this.hide = false;
  }
  
}
