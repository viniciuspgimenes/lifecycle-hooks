import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgOnChangesModule } from './ng-on-changes/ng-on-changes.module';
import { NgOnInitModule } from './ng-on-init/ng-on-init.module';
import { NgDoCheckModule } from './ng-do-check/ng-do-check.module';
import { NgAfterContentInitModule } from './ng-after-content-init/ng-after-content-init.module';
import { NgAfterContentCheckedModule } from './ng-after-content-checked/ng-after-content-checked.module';
import { NgAfterViewInitModule } from './ng-after-view-init/ng-after-view-init.module';
import { NgAfterViewCheckedModule } from './ng-after-view-checked/ng-after-view-checked.module';
import { NgOnDestroyModule } from './ng-on-destroy/ng-on-destroy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOnChangesModule,
    NgOnInitModule,
    NgDoCheckModule,
    NgAfterContentInitModule,
    NgAfterContentCheckedModule,
    NgAfterViewInitModule,
    NgAfterViewCheckedModule,
    NgOnDestroyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
