import { Component, computed, signal } from '@angular/core';

//! Puedes tener un signal en toda la aplicacion, toda la aplicacion puede acceder a el
@Component({
  selector:    'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl:    './counter-page.component.css'
})
export class CounterPageComponent {
  public counter = signal(10);  
  public squareCounter = computed(() => this.counter() * this.counter());

  public incrementCounter(value: number): void {
    this.counter.update((current) => current + value);
  }

  public decrementCounter(value: number): void {
    this.counter.update((current) => current - value);
  }

  public resetCounter(): void {
    this.counter.set(0);
  }


}
