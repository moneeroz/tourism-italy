import { Component, Input, OnInit } from '@angular/core';
import { Iweather } from 'src/app/interfaces/iweather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() weatherData: Iweather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherData = this.weatherService.getWeather();
  }
}
