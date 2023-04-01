import { Injectable } from '@angular/core';
import { citiesInfo } from '../data';
import { Icity } from '../interfaces/icity';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor() {}

  getCities(): Icity[] {
    return citiesInfo;
  }
}
