import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>
  <p>TICKS: {{ lifecycleTicks }}</p>
  <p>DATA: {{ data }}</p>
  `
})
export class ChildComponent implements OnInit {
  @Input() data: string;
  lifecycleTicks = 0;

  ngOnInit() {
    this.lifecycleTicks++;
  }
}

@Component({
  selector: 'app-ng-on-init',
  template: `
  <h1>ngOnInit Example</h1>
  <app-child [data]="arbitraryData"></app-child>
  `
})
export class NgOnInitComponent {
  arbitraryData = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 3000);
  }
}
