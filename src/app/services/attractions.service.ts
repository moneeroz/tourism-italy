import { Injectable } from '@angular/core';
import { Iattraction } from '../interfaces/iattraction';
import { cityAttractions } from '../data';

@Injectable({
  providedIn: 'root',
})
export class AttractionsService {
  constructor() {}

  getAttractions(): Iattraction[] {
    return cityAttractions;
  }
}
