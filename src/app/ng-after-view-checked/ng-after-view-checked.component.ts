import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
  <p>I am C.</p>
  <p>Hello World!</p>
  `
})
export class CComponent { }

@Component({
  selector: 'app-b',
  template: `
  <p #BStatement>I am B.</p>
  <button (click)="$event">CLICK</button>
  <ng-content></ng-content>
  `
})
export class BComponent implements AfterViewChecked {
  @ViewChild('BStatement', { read: ElementRef }) pStmt: ElementRef;

  constructor(private renderer: Renderer2) { }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterViewChecked() {
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB());
  }
}

@Component({
  selector: 'app-ng-after-view-checked',
  template: `
  <h1>ngAfterViewChecked Example</h1>
  <p>I am A.</p>
  <app-b>
    <h3>BComponent Content DOM</h3>
    <app-c></app-c>
  </app-b>
  `
})
export class NgAfterViewCheckedComponent { }
