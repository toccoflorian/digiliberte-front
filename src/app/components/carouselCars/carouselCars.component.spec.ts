import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCarsComponent } from './carouselCars.component';

describe('CarouselComponent', () => {
  let component: CarouselCarsComponent;
  let fixture: ComponentFixture<CarouselCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
