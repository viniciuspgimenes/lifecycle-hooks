import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  template: `
  <h1>ngDoCheck Example</h1>
  <p>DATA: {{ data[data.length - 1] }}</p>
  `
})
export class NgDoCheckComponent implements DoCheck {
  lifecycleTicks = 0;
  oldTheData: string;
  data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }
}
