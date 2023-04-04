import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAttractionsComponent } from './city-attractions.component';

describe('CityAttractionsComponent', () => {
  let component: CityAttractionsComponent;
  let fixture: ComponentFixture<CityAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAttractionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
