import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  initialValue: number = 0;
  initialTodoList: string[] = [];

  showAlert(value: number) {
    if (value % 7 === 0) alert('É múltiplo de 7!');
  }

  showFullListAlert(listLength: number) {
    alert('A lista está cheia!');
  }
}
