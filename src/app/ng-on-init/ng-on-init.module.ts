import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent, NgOnInitComponent } from './ng-on-init.component';

@NgModule({
  declarations: [
    NgOnInitComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgOnInitComponent,
  ]
})
export class NgOnInitModule { }
