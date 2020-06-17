import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent, CComponent, NgAfterViewCheckedComponent } from './ng-after-view-checked.component';

@NgModule({
  declarations: [
    NgAfterViewCheckedComponent,
    BComponent,
    CComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgAfterViewCheckedComponent,
  ]
})
export class NgAfterViewCheckedModule { }
