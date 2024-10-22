import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carouselVehiclesComponent } from './carousel-vehicule.component';

describe('CarouselVehiculeComponent', () => {
  let component: carouselVehiclesComponent;
  let fixture: ComponentFixture<carouselVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [carouselVehiclesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(carouselVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
