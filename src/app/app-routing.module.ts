import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { CitiesComponent } from './components/cities/cities.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { CityAttractionsComponent } from './components/city-attractions/city-attractions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'ideas', component: IdeasComponent },
  {
    path: 'weather/:name/:springM/:springN/:summerM/:summerN/:fallM/:fallN/:winterM/:winterN/:visitFrom/:visitTo/:weatherImg',
    component: WeatherDetailsComponent,
  },
  { path: 'cities/:name', component: CityAttractionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
