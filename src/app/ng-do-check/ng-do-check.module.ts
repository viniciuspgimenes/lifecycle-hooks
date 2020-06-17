import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDoCheckComponent } from './ng-do-check.component';

@NgModule({
  declarations: [
    NgDoCheckComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgDoCheckComponent,
  ]
})
export class NgDoCheckModule { }
