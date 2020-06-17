import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>
  <p>TICKS: {{ lifecycleTicks }}</p>
  <p>DATA: {{ data }}</p>
  `
})
export class ChildComponent implements OnChanges {
  @Input() data: string;
  lifecycleTicks = 0;

  ngOnChanges() {
    this.lifecycleTicks++;
  }
}

@Component({
  selector: 'app-ng-on-changes',
  template: `
  <h1>ngOnChanges Example</h1>
  <app-child [data]="arbitraryData"></app-child>
  `
})
export class NgOnChangesComponent {
  arbitraryData = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}
