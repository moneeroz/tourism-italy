import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityAttractionsComponent } from './components/city-attractions/city-attractions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    HomeComponent,
    FooterComponent,
    CitiesComponent,
    WeatherComponent,
    IdeasComponent,
    WeatherDetailsComponent,
    HighlightTextDirective,
    CityAttractionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
