import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent, CComponent, NgAfterViewInitComponent } from './ng-after-view-init.component';

@NgModule({
  declarations: [
    NgAfterViewInitComponent,
    BComponent,
    CComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgAfterViewInitComponent,
  ]
})
export class NgAfterViewInitModule { }
