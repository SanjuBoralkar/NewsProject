import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashbordComponent } from './dashbord.component';
import { NewsComponent } from '../news/news.component';
import { HeaderComponent } from '../header/header.component';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashbordComponent,
    // NewsComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class DashbordModule { }