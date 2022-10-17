import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css'],
})
export class MoviesTableComponent implements OnInit {
  @Input() moviesList!: Movie[];
  movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    this.movies = this.moviesList;
  }
}
