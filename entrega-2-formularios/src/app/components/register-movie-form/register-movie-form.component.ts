import { Movie } from './../../models/Movie';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { outputAst } from '@angular/compiler';
import { CustomValidators } from 'src/app/utils/CustomValidators';

@Component({
  selector: 'app-register-movie-form',
  templateUrl: './register-movie-form.component.html',
  styleUrls: ['./register-movie-form.component.css'],
})
export class RegisterMovieFormComponent implements OnInit {
  @Output() onRegisterMovie = new EventEmitter<Movie>();

  genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Suspense'];

  registerForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(24)]),
    genre: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [
      Validators.required,
      CustomValidators.isValidDate(''),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const { title, genre, releaseDate } = this.registerForm.value;
    const digits = releaseDate.split('');
    const day = `${digits[0]}${digits[1]}`;
    const month = `${digits[2]}${digits[3]}`;
    const year = `${digits[4]}${digits[5]}${digits[6]}${digits[7]}`;

    const movie = new Movie(title, genre, `${day}/${month}/${year}`);
    this.onRegisterMovie.emit(movie);
    this.registerForm.get('title')?.reset();
    this.registerForm.get('genre')?.reset();
    this.registerForm.get('releaseDate')?.reset();
  }

  isInvalidInput(formControlName: string): boolean | undefined {
    return (
      (this.registerForm.get(formControlName)?.invalid &&
        this.registerForm.get(formControlName)?.touched) ||
      this.registerForm.get(formControlName)?.dirty
    );
  }

  getError(formControlName: string): string | undefined {
    if (this.registerForm.get(formControlName)?.hasError('required')) {
      return 'Required field';
    } else if (this.registerForm.get(formControlName)?.hasError('minlength')) {
      let requiredLength = this.registerForm
        .get(formControlName)
        ?.getError('minlength').requiredLength;
      return `Provide ${requiredLength} characters at least`;
    } else if (this.registerForm.get(formControlName)?.hasError('maxlength')) {
      let requiredLength = this.registerForm
        .get(formControlName)
        ?.getError('maxlength').requiredLength;
      return `Provide a title below ${requiredLength} characters`;
    } else if (
      this.registerForm.get(formControlName)?.hasError('isValidDate')
    ) {
      let requiredLength = this.registerForm
        .get(formControlName)
        ?.getError('isValidDate').requiredLength;
      return `Provide a valid release date`;
    } else return '';
  }
}
