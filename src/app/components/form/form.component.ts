import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather.model';
import { take } from 'rxjs/operators';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  @Output() data = new EventEmitter<any>();

  constructor(private weatherService: WeatherService,
              fb: FormBuilder) {
                this.form = fb.group({
                  country: ['', [Validators.required]],
                  city: ['', [Validators.required]]
              });
            }

  ngOnInit() {}

  searchWeather() {
    if (this.form.valid) {
      this.data.emit(this.form.value);
    }
  }

}
