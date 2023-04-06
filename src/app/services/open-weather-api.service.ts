import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IopenWeatherApi } from '../interfaces/iopen-weather-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService {
  api_key = 'd97a3b338d205678ca3fc6a6516c47ad';

  constructor(private http: HttpClient) {}

  getCurrentWeather(name: string): Observable<IopenWeatherApi> {
    return this.http.get<IopenWeatherApi>(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.api_key}&units=metric`,
    );
  }
}
