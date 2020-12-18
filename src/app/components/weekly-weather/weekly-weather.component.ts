import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { take } from 'rxjs/operators';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent implements OnChanges {

  @Input() data: {city: string, country: string};
  weatherDays: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnChanges() {
    this.weatherService.getWeeklyWeather(this.data.city, this.data.country)
      .subscribe(res => {
        if (res && res.data) {
          this.weatherDays = res.data.map( day => {
            const obj = {
              description: day.weather.description,
              maxTemperature: day['high_temp'],
              minTemperature: day['low_temp'],
              temperature: day.temp,
              windSpeed: day['wind_spd'],
              datetime: day.datetime,
              img: `${day.weather.icon}.png`
            };
            return obj;
          });
        }
    });
  }
}
