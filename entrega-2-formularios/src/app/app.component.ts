import { Movie } from './models/Movie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  moviesList: Movie[] = [];

  onRegisterMovie(movie: Movie) {
    this.moviesList.push(movie);
  }
}
