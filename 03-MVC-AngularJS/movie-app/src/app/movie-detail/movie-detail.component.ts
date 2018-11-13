import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Movie} from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movie:Movie;
  @Input() hide:Boolean;
  @Output() hideOut = new EventEmitter();
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  save(): void {
    this.movieService.updateHero(this.movie)
    //when the SAVE is trigger, the details will disappear.
    this.hideOut.emit();
  }
  ngOnChanges(){
    console.log(this.hide);
  }
}
