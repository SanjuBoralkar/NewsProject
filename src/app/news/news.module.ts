import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    // BrowserModulce,
    CommonModule,
    NewsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class NewsModule { }