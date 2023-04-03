import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { Iweather } from '../interfaces/iweather';

@Injectable({
  providedIn: 'root',
})
export class CityNamesService {
  // cityWeatherArray!: Iweather[];
  // cityNamesArray!: string[];
  cityNames: string[] = [];

  constructor(private weatherService: WeatherService) {}

  // getNames() {
  //   this.cityWeatherArray = this.weatherService.getWeather();
  //   for (let i = 0; i < this.cityWeatherArray.length; i++) {
  //     this.cityNamesArray.push(this.cityWeatherArray[i].name);
  //   }

  //   return this.cityNamesArray;
  // }

  getCityNames(): string[] {
    this.weatherService
      .getWeather()
      .forEach((city) => this.cityNames.push(city.name));

    return this.cityNames;
  }
}
