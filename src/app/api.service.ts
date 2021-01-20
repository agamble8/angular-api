import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e2dad5de2c9647348b1e8ff4699a1e28');
  }

  public getWeather() {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?zip=66202,us&units=imperial&APPID=2d4cdcba967ce53aae8c4db47fd6b052');
  }

  public getSharp() {
    return this.httpClient.get('https://localhost:44300/weatherforecast');
  }
}

// ng generate service [name]