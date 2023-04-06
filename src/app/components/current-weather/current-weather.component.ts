import { Component, Input, OnInit } from '@angular/core';
import { OpenWeatherApiService } from 'src/app/services/open-weather-api.service';
import { IopenWeatherApi } from '../../interfaces/iopen-weather-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  weatherData?: IopenWeatherApi;
  @Input() cityName: string = 'Calgary';
  isSearch: boolean = true;

  constructor(
    private currentWeather: OpenWeatherApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('name') !== null) {
      this.isSearch = false;
    }

    this.getCurrentWeather(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getCurrentWeather(this.cityName);
    this.cityName = '';
  }

  private getCurrentWeather(cityName: string) {
    this.currentWeather.getCurrentWeather(cityName).subscribe((result) => {
      this.weatherData = result;
      console.log(result);
    });
  }
}
