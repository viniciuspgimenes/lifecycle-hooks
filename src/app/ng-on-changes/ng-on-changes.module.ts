import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent, NgOnChangesComponent } from './ng-on-changes.component';

@NgModule({
  declarations: [
    NgOnChangesComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgOnChangesComponent,
  ]
})
export class NgOnChangesModule { }
