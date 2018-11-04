import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    HttpClientModule,
    // Shared Components
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ]
})
export class SharedModule { }
