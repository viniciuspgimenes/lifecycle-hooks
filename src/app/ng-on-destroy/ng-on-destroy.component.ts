import { Directive, Component, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDestroyListener]'
})
export class DestroyListenerDirective implements OnDestroy {
  ngOnDestroy() {
    console.log('Goodbye World!');
  }
}

@Component({
  selector: 'app-ng-on-destroy',
  template: `
  <h1>ngOnDestroy Example</h1>
  <button (click)="toggleDestroy()">TOGGLE DESTROY</button>
  <p appDestroyListener *ngIf="destroy">I can be destroyed!</p>
  `
})
export class NgOnDestroyComponent {
  destroy = true;

  toggleDestroy() {
    this.destroy = !this.destroy;
  }
}
