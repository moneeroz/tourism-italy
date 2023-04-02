import { Component, OnInit } from '@angular/core';
import { Icity } from 'src/app/interfaces/icity';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities!: Icity[];
  citiesColor!: boolean;

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
    this.citiesColor = this.colorit();
  }

  colorit() {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractions.length < 3) {
        return false;
      }
    }
    return true;
  }
}
