import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyListenerDirective, NgOnDestroyComponent } from './ng-on-destroy.component';

@NgModule({
  declarations: [
    NgOnDestroyComponent,
    DestroyListenerDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgOnDestroyComponent
  ]
})
export class NgOnDestroyModule { }
