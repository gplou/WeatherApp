import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const countries = require('./countries.json');

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiKey = '52c64feaf4f6757d3f83bda03abbb8b2';
  weatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  weatherBitKey = 'cc6a49f4ff9c427bb6680181df7a13ce';
  weatherBitBaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';

  constructor( private http: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<any> {
    return this.http.get(`${this.weatherApiBaseUrl}?q=${city},${country}&appid=${this.weatherApiKey}`);
  }

  getWeeklyWeather(city: string, country: string): Observable<any> {
    Object.keys(countries).forEach( (item: string) => {
      if (countries[item].toLowerCase() === country.toLowerCase()) {
        country = item;
        return;
      }
    });
    return this.http.get(`${this.weatherBitBaseUrl}?city=${city},${country}&days=7&lang=es&key=${this.weatherBitKey}`);
  }
}
