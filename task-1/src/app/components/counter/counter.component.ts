import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() initialValue!: number;
  @Output() valueChanged = new EventEmitter<number>();

  value!: number;

  constructor() {}

  ngOnInit(): void {
    this.value = this.initialValue;
  }

  increment() {
    this.value++;
    this.valueChanged.emit(this.value);
  }

  decrement() {
    if (this.value === 0) return;
    this.value--;
    this.valueChanged.emit(this.value);
  }
}
