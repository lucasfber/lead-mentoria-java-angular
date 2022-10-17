import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMovieFormComponent } from './register-movie-form.component';

describe('RegisterMovieFormComponent', () => {
  let component: RegisterMovieFormComponent;
  let fixture: ComponentFixture<RegisterMovieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMovieFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
