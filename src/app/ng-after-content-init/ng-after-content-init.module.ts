import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent, CComponent, NgAfterContentInitComponent } from './ng-after-content-init.component';

@NgModule({
  declarations: [
    NgAfterContentInitComponent,
    BComponent,
    CComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgAfterContentInitComponent,
  ]
})
export class NgAfterContentInitModule { }
