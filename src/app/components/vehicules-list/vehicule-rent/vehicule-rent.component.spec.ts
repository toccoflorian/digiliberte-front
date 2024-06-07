import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeRentComponent } from './vehicule-rent.component';

describe('VehiculeRentComponent', () => {
  let component: VehiculeRentComponent;
  let fixture: ComponentFixture<VehiculeRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculeRentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculeRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
