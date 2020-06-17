import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

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
  <ng-content></ng-content>
  `
})
export class BComponent implements AfterViewInit {
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow');
  }
}

@Component({
  selector: 'app-ng-after-view-init',
  template: `
  <h1>ngAfterViewInit Example</h1>
  <p>I am A.</p>
  <app-b>
    <h3>BComponent Content DOM</h3>
    <app-c></app-c>
  </app-b>
  `
})
export class NgAfterViewInitComponent { }
