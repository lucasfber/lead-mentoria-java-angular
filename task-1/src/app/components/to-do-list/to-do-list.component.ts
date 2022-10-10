import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  @Input() initialTodoList: string[] = [];
  @Output() fullList = new EventEmitter<number>();

  tituloTarefa: string = '';
  todos: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = this.initialTodoList;
  }

  setTarefaTitle(event: any) {
    this.tituloTarefa = event.target.value;
  }

  addTarefaToList() {
    if (this.todos.length === 10) {
      this.tituloTarefa = '';
      this.fullList.emit(this.todos.length);
      return;
    }

    this.todos.push(this.tituloTarefa);
    this.tituloTarefa = '';
  }
}
