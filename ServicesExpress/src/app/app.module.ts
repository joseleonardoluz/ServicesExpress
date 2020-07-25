import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMain } from './header/header.component';
import { Searcher } from './searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMain,
    Searcher
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
