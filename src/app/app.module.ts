import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeeklyWeatherComponent } from './components/weekly-weather/weekly-weather.component';
import { WeatherService } from './services/weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CurrentWeatherComponent,
    WeeklyWeatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
