import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iweather } from 'src/app/interfaces/iweather';
import { OpenWeatherApiService } from 'src/app/services/open-weather-api.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent {
  // @Input() cityWeatherData?: Iweather;

  name = this.activatedRoute.snapshot.paramMap.get('name');
  springM = this.activatedRoute.snapshot.paramMap.get('springM');
  springN = this.activatedRoute.snapshot.paramMap.get('springN');
  summerM = this.activatedRoute.snapshot.paramMap.get('summerM');
  summerN = this.activatedRoute.snapshot.paramMap.get('summerN');
  fallM = this.activatedRoute.snapshot.paramMap.get('fallM');
  fallN = this.activatedRoute.snapshot.paramMap.get('fallN');
  winterM = this.activatedRoute.snapshot.paramMap.get('winterM');
  winterN = this.activatedRoute.snapshot.paramMap.get('winterN');
  visitFrom = this.activatedRoute.snapshot.paramMap.get('visitFrom');
  visitTo = this.activatedRoute.snapshot.paramMap.get('visitTo');

  currentCity: any = this.name;

  constructor(private activatedRoute: ActivatedRoute) {}
}
