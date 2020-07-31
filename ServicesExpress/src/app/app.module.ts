import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMain } from './header/header.component';
import { Searcher } from './searcher/searcher.component';
import { CardMainHome } from './card_main_home/card_main_home.component';
import { SwiperHome } from './swiper_home_first/swiper_home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMain,
    Searcher,
    CardMainHome,
    SwiperHome  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
