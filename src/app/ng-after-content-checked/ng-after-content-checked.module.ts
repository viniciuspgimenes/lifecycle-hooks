import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent, CComponent, NgAfterContentCheckedComponent } from './ng-after-content-checked.component';

@NgModule({
  declarations: [
    NgAfterContentCheckedComponent,
    BComponent,
    CComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgAfterContentCheckedComponent,
  ]
})
export class NgAfterContentCheckedModule { }
