import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskListComponent } from './desk-list/desk-list.component';
import { BenchListComponent } from './bench-list/bench-list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskListComponent,
    BenchListComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
