import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { SharpComponent } from './sharp/sharp.component';
import { MoviesComponent } from './movies/movies.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WeatherComponent,
    SharpComponent,
    MoviesComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
