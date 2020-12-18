import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { take, catchError } from 'rxjs/operators';
import { Weather } from 'src/app/models/weather.model';
import { throwError } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnChanges {

  @Input() data: {city: string, country: string};
  weather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnChanges() {
    this.weatherService.getCurrentWeather(this.data.city, this.data.country)
      .pipe(take(1)).subscribe(res => {
        this.weather = {
          description: res.weather[0].description,
          humidity: res.main.humidity,
          maxTemperature: this.toCelsius(res.main['temp_max']),
          minTemperature: this.toCelsius(res.main['temp_min']),
          temperature: this.toCelsius(res.main.temp),
          windSpeed: this.toKmH(res.wind.speed),
          img: `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
        };
      }, err => {
        catchError(err);
      });
  }

  toCelsius(temp: string): number {
    return Number(temp) - 273.15;
  }

  toKmH(wind: string): number {
    return Number(wind) * 3.6;
  }

}
