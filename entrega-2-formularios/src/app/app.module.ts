import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { RegisterMovieFormComponent } from './components/register-movie-form/register-movie-form.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMovieFormComponent,
    MoviesTableComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
