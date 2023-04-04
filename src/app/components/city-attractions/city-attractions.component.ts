import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iattraction } from 'src/app/interfaces/iattraction';
import { AttractionsService } from 'src/app/services/attractions.service';

@Component({
  selector: 'app-city-attractions',
  templateUrl: './city-attractions.component.html',
  styleUrls: ['./city-attractions.component.scss'],
})
export class CityAttractionsComponent implements OnInit {
  citiesAttractions: Iattraction[] = [];
  attractions: string[] = [];

  constructor(
    private attractionsService: AttractionsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.citiesAttractions = this.attractionsService.getAttractions();
    for (const city of this.citiesAttractions) {
      if (city.name === name) {
        for (const img of city.imgs) {
          this.attractions.push(img);
        }
      }
    }
    console.log(this.attractions);
  }
}
